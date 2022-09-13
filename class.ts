class Employee{
    id:number;
    name:string;
    address:string;

    //typescript not supported for multiple constructers
    constructor(id:number, name:string, address:string){
        this.id = id;
        this.name = name;
        this.address = address;
    }
    // method
    getNameWithAddress():string{
        return `${this.name} Stays at ${this.address}`;
    } 
}

let ishan = new Employee(1,"ishan","Colmbo SL");
let address = ishan.getNameWithAddress();
// ishan.id = 1;
// ishan.name = "Ishan";
// ishan.address = "colombo sl";
console.log(address);