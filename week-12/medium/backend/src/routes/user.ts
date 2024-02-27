import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, signinInput  } from '@deepjyoti-sarmah/zod-input-validator'

export const userRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();


userRoute.post("/signup", async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const {success} = signupInput.safeParse(body);
  if(!success) {
    c.status(400);
    return c.json({error: "Invalid input"});
  }

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

userRoute.post("/signin", async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const {success} = signinInput.safeParse(body);
  if(!success) {
    c.status(400);
    return c.json({error: "Invalid input"});
  }

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

