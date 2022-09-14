export interface User{ //export keyword is ued to access interface in outside
    name:string;
    age?:number;
    id:number;
    email:string;
}

let user:User = {name:"Ishan",age:25,id:1,email:"ishanmadhawa44@gmail.com"}

interface Employees extends User{ // extending interface to another interface
    salary:number;
}
let employees:Employees = {name:"Ishan",age:25,id:1,email:"ishanmadhawa44@gmail.com",salary:15000}

export interface Login{
    Login():User;
}
/*
    Abstraction is the concept of object-oriented programming that "shows" 
    only essential attributes and "hides" unnecessary information. 
    The main purpose of abstraction is hiding the unnecessary details from the users

    An interface is a description of the actions that an object can do... 
    for example when you flip a light switch, the light goes on, you don't care how, 
    just that it does. In Object Oriented Programming, an Interface is a description of all
     functions that an object must have in order to be an "X".
*/ 

//object destruchring
let {name:userName,email:userLogin} = {name:"Ishan",email:"ishanmadhawa44@gmail.com"} 
console.log(userName);

//Array Destruchring
let [users1,user2,...restUsers]:User[] = [ 
    {name:"Ishan",id:1,email:"ishanmadhawa44@gmail.com"},
    {name:"Dulashini",id:2,email:"dula44@gmail.com"},
    {name:"Kavindya",id:3,email:"kavi44@gmail.com"},
    {name:"dilani",id:4,email:"dilani@gmail.com"},
    {name:"osha",id:5,email:"osha@gmail.com"}

];
console.log(users1);
console.log(user2);
console.log(...restUsers);