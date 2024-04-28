import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate"
import { verify } from "hono/jwt"

export const BlogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        key:string
    },
    Variables:{
        userId:string
    }
}>()

BlogRouter.use('/*',async (c,next) => {
    try{
        const authHeader = c.req.header("Authorization");
        console.log(`heder`,authHeader)
        if(!authHeader){
            c.status(403);
            return c.json({
                error:'Unauthorized'            
            })
        }
        const user = await verify(authHeader,c.env?.key)
        console.log(`idUser`,user)
         if(!user){
            c.status(401);
            return c.json({
                error:'Unauthorized'            
            })
        }
        c.set("userId",user.id)
        await next()
    }catch(err){
        c.status(401)
        c.json({
            error:'err'
        })
    }
})


BlogRouter.post('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
      const body = await c.req.json()
    
    const authorId = c.get('userId')
    const blog = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:authorId
        }
    })
    if(!blog){
        return c.json({
            error:"Author Already Exsists"
        })
    }
    return c.json({
        id:blog.id
    })
    
  })
  
BlogRouter.get('/',async (c) => {
    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
          }).$extends(withAccelerate());
        const body = await c.res.json()

        const bog = prisma.post.findMany({
        })
        return c.json({
            bog
        })
    }catch(err){
        return c.json({
            sorry:"Error"+err
        })
    }
  })
  
BlogRouter.get('/:id',async (c) => {
    try{
        const id = c.req.param('id')
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
          }).$extends(withAccelerate());
        const body = await c.req.json()
        const blog = await prisma.post.findFirst({
           where:{
                id:id
           }
        })
        if(!blog){
    
        }
        return c.json({
            id:id
        })
    } catch(err) {
        return c.json({
            error:'Soory req Failed'
        })

    }
  
  })
  BlogRouter.put('/',(c) => {

    return c.text('')
  })