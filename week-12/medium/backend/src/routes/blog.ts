import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { initMiddleware } from '../middleware';

export const blogRoute = new Hono<{
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

initMiddleware(blogRoute);

blogRoute.post("/", async (c) => {
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

blogRoute.put("/", async (c) => {
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

blogRoute.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const userId = c.get("userId");
  console.log(userId)
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

    return c.json({blogpost: getPost});
    
  } catch (error) {
    c.status(403);
    return c.json({error: "error while fetching blog"});
  }
});

