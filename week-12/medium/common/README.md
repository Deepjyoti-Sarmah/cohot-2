```
import { signupInput, signinInput, createPostInput, updatePostInput } from '@deepjyoti-sarmah/zod-input-validator'

// singup route
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

//signin route
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

//post route
blogRoute.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const userId = c.get("userId");
  const body = await c.req.json();

  const {success} = createPostInput.safeParse(body);
  if(!success) {
    c.status(400);
    return c.json({error: "Invalid Input"});
  }

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

//update route
blogRoute.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const userId = c.get("userId");
  const body = await c.req.json();

  const {success} = updatePostInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({error: "Invalid input"});
  }

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

```
