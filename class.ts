class Employee{
    #id:number;
    name:string;
    protected address:string;

    //typescript not supported for multiple constructers
    constructor(id:number, name:string, address:string){
        this.#id = id;
        this.name = name;
        this.address = address;
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

let ishan = new Employee(1,"ishan","Colmbo SL");
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
    constructor(id:number, name:string, address:string){
        super(id,name,address);
    }
    // method over riding
    getNameWithAddress():string{
        return `${this.name} Manager Stays at ${this.address}`;
    } 
}

let kavindya = new Manager(2,"Kavindya","Rathanapura");
console.log(kavindya.getNameWithAddress());