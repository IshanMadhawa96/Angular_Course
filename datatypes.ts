//STRING DATATYPE

let fname:string;
fname = "Ishan";
let newFname=fname.toUpperCase();
console.log(newFname);

//NUMBER DATATYPE
let age:number;
age = 25;
age = 25.5;
//using type cast
let dob = "25";
let result = parseInt(dob);
console.log(age);
console.log(dob);

//Bool datatype
let isValid:boolean=true ; //in typescript wee need to define true or false in boolean datatype
console.log(isValid);

//Arrays
let empList:string[]; //another way---- let depList:Arrays<string>;
empList = ["Ishan","Kavindya","Kanishka"];

let numList:Array<number>;
numList= [1,2,3,4,5];
//some functions
// filter array numbers grater than 2
let arrayResult = numList.filter((num)=> num>2);
console.log(empList);
console.log(arrayResult);
// find array numbers grater than 2
let findNumber = numList.find((num)=> num==2);
console.log(findNumber);
// serach value in typescrip array
let empSearch = empList.find((emp)=> emp=="Ishan");
console.log(empSearch);
//sum array values
let sum = numList.reduce((acc,num) =>acc+num);
console.log("Array Sum:-"+sum);

//enums
/*
 Enum, short for "enumerated," is a data type that consists of predefined values.
 A constant or variable defined as an enum can store 
 one of the values listed in the enum declaration. 
 Enums are used in both source code and database tables.
 */
const enum Color{
    red,
    green,
    blue
}
let c:Color = Color.blue;
console.log("Color:-"+c);

//tuples
/*
     A tuple is a data structure that is an immutable, or unchangeable, ordered sequence of elements.
*/
let swapNumbers:[number,number];

function swapNumber(num1:number,num2:number):[number,number]{
    return [num1,num2];
}

swapNumbers=swapNumber(10,20);
console.log(swapNumbers[1 ]);

//any datatype
/*
    The any type allows us to assign literally “any” particular value to that variable, 
    simulating what we know as plain JavaScript - where types can dynamically be assigned 
    from different types, 
    such as a String value becoming a Number. The Any type. When to use Any in TypeScript.
*/
let department:any;
department = "IT";
department=20;
