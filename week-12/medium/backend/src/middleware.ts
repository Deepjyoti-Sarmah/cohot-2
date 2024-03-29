import { verify } from 'hono/jwt'

import { Context, Next } from 'hono';

export const initMiddleware = async (c: Context, next: Next ) => {
  const jwt = c.req.header("Authorization")|| "";
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
}
