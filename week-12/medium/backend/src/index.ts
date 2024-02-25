import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
  Variables: {
    userId: string,
    title: string,
    content: string,
    authorId: string
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

app.get("/", (c) => {
  return c.text("Namaste Hono");
})

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
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

app.post("/api/v1/blog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const userId = c.get("userId");
  const body = await c.req.json();

  try {
    const user = await prisma.user.findUnique({
      where:{id: userId}
    });

    if (!user) {
      c.status(403)
      return c.json({error:"user not found"});
    }

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: userId
      }  
    });
    return c.json({id: post.id});

  } catch (error) {
    c.status(403);
    return c.json({error: "error while creating blog"});
  }
});

app.put("/api/v1/blog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const userId = c.get("userId");
  const body = await c.req.json();

  try {
    const user = await prisma.user.findUnique({
      where: {id: userId}
    });

    if(!user) {
      c.status(403);
      c.json({error: "User not found"});
    }

    const updatePost = await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published
      }
    });
    return c.json({
      message: "Updated post",
      updatedPost: updatePost.id
    });

  } catch (error) {
    c.status(403);
    return c.json({error: "error while updating blog"});
  }
});

app.get("/api/v1/blog/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const userId = c.get("userId");
  const id = c.req.param("id");
  // console.log(id);
  try {
    const user = await prisma.user.findUnique({
      where: {id: userId}
    });

    if(!user) {
      c.status(403);
      return c.json({error: "user not found"});
    }

    const getPost = await prisma.post.findFirst({
      where: {
        id: id,
      }
    });

    return c.json({blogpost: getPost?.id});
    
  } catch (error) {
    c.status(403);
    return c.json({error: "error while fetching blog"});
    
  }
});

export default app
