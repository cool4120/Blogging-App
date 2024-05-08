import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";


export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        key:string
    }
}>()

userRouter.post('/signin',async (c) => {
    //Env variables only have access inside the functions and not globals in Serverlesss.
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try{
      const body = await c.req.json()
      console.log(`SignInBody`,body)
      const userExsist = await prisma.user.findUnique({
        where:{
          email:body.username
        }
      })
      if(!userExsist){
        return c.json({error:"User doesnt Exsists"})
      }
      const token = await sign({id:body.email},c.env?.key)
      return c.json({token:token,message:"SignIn Success"})
    }catch(err) {
          c.status(403);
          return c.json({ error: "error while signing up" });
    }
  })

  userRouter.post('/signup',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())
    try{
      const body = await c.req.json()
      console.log(`BODYVA`,body)
      await prisma.user.create({
        data:{
          email:body.username,
          password:body.password,
          name:body.name
        }
      })
      const token = await sign({id:body.email},c.env?.key)
      return c.json({ token })
    }catch(err){
     console.log(`Error:`,err)
    }
  })