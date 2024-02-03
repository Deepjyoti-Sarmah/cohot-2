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
    // const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
    
  } catch (error) {
    console.error("Error during the insertion", error);
  } finally {
    await client.end();
  }
}

async function getUser(email: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });
    

  try {
    await client.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
// getUser('user5@example.com').catch(console.error);

insertData('username5', 'user5@example.com', 'user_password').catch(console.error);

getUser('user5@example.com').catch(console.error);

createUsersTable();


// Off topic question How to audit a smart contract? Got an assignment where I need to create a smart contract, submit it on a test net and audit it. Smart Contract created deployment and testing left  
