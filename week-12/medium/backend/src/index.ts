import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
  Variables: {
    userId: string
  }
}>();


app.use("/api/v1/blog/*", async (c, next) => {

  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401);
    return c.json({error: "unauthorized"});
  }

  try {
    const token = jwt.split(" ")[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
      c.status(401);
      return c.json({error: "unauthorized"});
    }
    c.set("userId", payload.id);
    await next();
    
  } catch (error) {
    c.status(403);
    return c.json({error: "error in authentication"});
  }
});

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const {body} = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password
      }
    });

    const jwt = await sign( {id: user.id}, c.env.JWT_SECRET);
    return c.json({jwt});

  } catch (error) {
    return c.status(403);
  }
});

app.post("/api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        // password: body.password
      }
    });

    if (!user) {
      c.status(403);
      return c.json({error: "User not found"});
    }

    const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json({jwt});
    
  } catch (error) {
    c.status(403);
    return c.json({error: "error while signing in"});
  }
});

app.post("/api/v1/blog", (c) => {
  return c.text("post blog route");
});

app.put("/api/v1/blog", (c) => {
  return c.text(" put blog route");
});

app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("get blog route");
});

export default app
