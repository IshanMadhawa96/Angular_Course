import {Login, User} from './interface'; // importing interface
interface Address{
    street:string;
    city:string;
    state:string;
    pin:string;
}
class Employee implements Login{ //implement interface
    #id:number;
    name:string;
    protected address:Address;

    //typescript not supported for multiple constructers
    constructor(id:number, name:string, address:Address){
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    Login(): User {
       return {name:"Ishan",age:25,id:1,email:"ishanmadhawa44@gmail.com"};
    }
    // method
    getNameWithAddress():string{
        return `${this.name} Stays at ${this.address}`;
    } 
    //static methods it depond on class not object instance
    static getEmployeeCount():number{
        return 50;
    }

    //getters and setters
    get EmpId():number{
        return this.#id;
    }

    set EmpId(value:number){
        this.#id=value;
    }
}

let ishan = new Employee(1,"ishan",{street:"Bathiya Road",city:"Wellawatta",state:"Western",pin:"72"});
console.log(ishan);
ishan.EmpId = 100;
console.log(ishan.EmpId);
let address = ishan.getNameWithAddress();
//calling without object instance
Employee.getEmployeeCount();
// ishan.id = 1;
// ishan.name = "Ishan";
// ishan.address = "colombo sl";
console.log(address);

//inhertance 
class Manager extends Employee{
    constructor(id:number, name:string, address:Address){
        super(id,name,address);
    }
    // method over riding
    getNameWithAddress():string{
        return `${this.name} Manager Stays at ${this.address}`;
    } 
}

let kavindya = new Manager(2,"Kavindya",{street:"Bathiya Road",city:"Wellawatta",state:"Western",pin:"72"});
console.log(kavindya.getNameWithAddress());