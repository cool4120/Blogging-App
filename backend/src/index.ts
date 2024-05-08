import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { BlogRouter } from './routes/blog'
import { cors } from 'hono/cors';

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    key:string
  }
}>();

app.use('/*',cors())
app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',BlogRouter)


// app.get('/', (c) => {
//   return c.text('Welcome to Hono!')
// })

// app.post('/api/v1/signin',async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env?.DATABASE_URL,
//   }).$extends(withAccelerate());
//   try{
//     const body = await c.req.json()
//     const userExsist = await prisma.user.findUnique({
//       where:{
//         email:body.email
//       }
//     })
//     if(!userExsist){
//       return c.json({error:"User doesnt Exsists"})
//     }
//     const token = await sign({id:body.email},c.env?.key)
//     return c.json({token:token})
//   }catch(err) {
// 		c.status(403);
// 		return c.json({ error: "error while signing up" });
//   }
// })



export default app
