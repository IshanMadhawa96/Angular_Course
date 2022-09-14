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