// const x: number = 1;
// // x = "deep";
// console.log(x);

// function greeting(firstName: string) {
//   console.log(`Hello ${firstName}`);
// }
// greeting("Deep");

// function sum(a: number, b: number): number {
//   return a + b;
// }
// console.log(sum(2,4));


// function isLegalAge(age: number) : boolean {
//   if( age > 18) {
//     return true;
//   } else {
//     return false
//   }
// }
// console.log(isLegalAge(11));

// function callback( fn: () => void){
//   setTimeout(fn, 1000);
// }

// callback(function() {
//   console.log("Hi there")
// });

// const greet = (name: string) => `Hello, ${name}!`;
//
// interface User {
//   firstName: string,
//   lastName: string,
//   age: number,
//   email?: string
// }

// function isLegal(user: User) {
//   if(user.age > 18) {
//     return true
//   } else {
//     return false;
//   }
// }

// isLegal({
//   firstName: "deep",
//   lastName: "Deep",
//   age: 20
// });

// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Manager = {
//   name: string;
//   department: string;
// };

// type TeamLead = Employee & Manager;

// const teamLead: TeamLead = {
//   name: "harkirat",
//   startDate: new Date(),
//   department: "Software developer"
// };

function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));
