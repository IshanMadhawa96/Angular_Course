"use strict";
class Employee {
    //typescript not supported for multiple constructers
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    // method
    getNameWithAddress() {
        return `${this.name} Stays at ${this.address}`;
    }
}
let ishan = new Employee(1, "ishan", "Colmbo SL");
let address = ishan.getNameWithAddress();
// ishan.id = 1;
// ishan.name = "Ishan";
// ishan.address = "colombo sl";
console.log(address);
