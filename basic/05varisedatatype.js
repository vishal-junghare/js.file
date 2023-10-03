// primative 

// 7 types : string ,number,boolean, null,undefined,symbol,
// BigInt
let number = 100;
let floatValue = 3.9;
const isloggedIn=false;
const outSideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol("123")
// console.log(id);
// console.log(anotherId);
// console.log(anotherId === id);
const BigNumber = 2345678920000887474n

// reference vs Non-primative
 // Arrey ,Object,functions
 const heros =['vishal',"bandu",22,22.4,true]
 //object 
 let myObj={
    name:"vishal",
    age:29
 }
 //functions 
 const myFunction =function() {
    console.log(myFunction)
 }
 console.log(typeof myObj)
 console.log(typeof heros)
 // link to study
 //https://262.ecma-international.org/5.1/#sec-11.4.3

 /* Table 20 — typeof Operator Results
Type of val	Result
Undefined	"undefined"
Null	"object"
Boolean	"boolean"
Number	"number"
String	"string"
Object (native and does not implement [[Call]])	"object"
Object (native or host and does implement [[Call]])	"function"
Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string". */



//************************************************************** */
//stack (primative ) , Heap (Non-Primative)
// this study link 
//https://excalidraw.com/

// stack are provide copy of page 
 let myName ="vishaljunghare";
 let anotherName=myName;
 console.log(myName);
 console.log(anotherName)
 anotherName="rohanjunghare";
 console.log(anotherName) // stack is copy to privous page
 

// heap are provide refernces
let userOne = {
    name:"vishal",
    email:"vjugnhare@",
    upi:"ok@icici"
}

let userTwo = userOne
userTwo.email = "vishaljugnhare@";
console.log(userOne.email);
console.log(userTwo.email)



