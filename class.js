"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
Address;
{
    street: string;
    city: string;
    state: string;
    pin: string;
}
class Employee {
    //typescript not supported for multiple constructers
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    // method
    getNameWithAddress() {
        return `${this.name} Stays at ${this.address}`;
    }
    //static methods it depond on class not object instance
    static getEmployeeCount() {
        return 50;
    }
    //getters and setters
    get EmpId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set EmpId(value) {
        __classPrivateFieldSet(this, _Employee_id, value, "f");
    }
}
_Employee_id = new WeakMap();
let ishan = new Employee(1, "ishan", { street: "Bathiya Road", city: "Wellawatta", state: "Western", pin: "72" });
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
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    // method over riding
    getNameWithAddress() {
        return `${this.name} Manager Stays at ${this.address}`;
    }
}
let kavindya = new Manager(2, "Kavindya", { street: "Bathiya Road", city: "Wellawatta", state: "Western", pin: "72" });
console.log(kavindya.getNameWithAddress());
