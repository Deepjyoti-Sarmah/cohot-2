"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to create a users table in your database.
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
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
            const res = yield client.query(insertQuery);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (error) {
            console.error("Error during the insertion", error);
        }
        finally {
            yield client.end();
        }
    });
}
insertData();
createUsersTable();
// Off topic question How to audit a smart contract? Got an assignment for a internship need to create a smart contract, submit it on a test net and audit it. Smart Contract created deployment and testing left  
