export interface User{
    name:string;
    age?:number;
    id:number;
    email:string;
}

let user:User = {name:"Ishan",age:25,id:1,email:"ishanmadhawa44@gmail.com"}

interface Employees extends User{
    salary:number;
}
let employees:Employees = {name:"Ishan",age:25,id:1,email:"ishanmadhawa44@gmail.com",salary:15000}

export interface Login{
    Login():User;
}