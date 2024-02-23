import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const response = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName
    }
  });
  console.log(response);
}
insertUser("deep", "1234", "deep", "deep");


interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(username: string, {firstName, lastName}: UpdateParams) {
  const response = await prisma.user.update({
    where: {username},
    data: {
      firstName,
      lastName
    }
  });
  console.log(response);
}
updateUser("deep", {firstName: "deep", lastName: "sar"});


async function getUser(username: string) {
  const response = await prisma.user.findFirst({
    where: {username},
  });
  console.log(response);
}
getUser("deep");

async function createTodo(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId
    },
  });
  console.log(todo);
}
createTodo(1, "go to gym", "go to gym and do 10 pushups");

async function getTodos(userId: number) {
  const todo = await prisma.todo.findFirst({
    where: {userId},
  });
  console.log(todo);
}
getTodos(1);

async function getTodosAndUserDetails(userId: number) {
  // const user = await prisma.user.findUnique({
  //       where: {
  //           id: userId
  //       }
  //   });
  //   const todos = await prisma.todo.findMany({
  //       where: {
  //           userId: userId,
  //       }
  //   });
  //   console.log(todos);
  //   console.log(user)

  const todos = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      user: true,
      title: true,
      description: true
    }
  });
  console.log(todos);
}
getTodosAndUserDetails(1);
