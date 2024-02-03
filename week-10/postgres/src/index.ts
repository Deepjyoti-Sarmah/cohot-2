// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

async function insertData(username: string, email: string, password: string) {

  // const client = new Client({
  //   host: "localhost",
  //   port: 5432,
  //   database: "postgres",
  //   user: "postgres",
  //   password: "mysecretpassword",
  // });

  try {
    // await client.connect();
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
    
  } catch (error) {
    console.error("Error during the insertion", error);
  } finally {
    await client.end();
  }
}

insertData();

createUsersTable();




// Off topic question How to audit a smart contract? Got an assignment for a internship need to create a smart contract, submit it on a test net and audit it. Smart Contract created deployment and testing left  
