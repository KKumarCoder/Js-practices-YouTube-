//Primitive data-type
//7 types:-String,Number,Boolean,null,undefine,Symbols,BigInt
const score=100;
const scoreValue=100.33
const isLoggedIn=false;
const outsideTemp=null;
let userEmail=undefined; // let userEmail

const id =Symbol('2254');
const anotherId=Symbol("2254")
console.log(id===anotherId);
const bigNumber=2154321358431564523n;
console.log(typeof bigNumber);

//Reference (Non primitive )
//Array ,Object ,Function
const heros=["shaktiman","nagarjun","dogasuper"];

let myobj={
     name:"krishna",
     age:54,
     rollNo:"451A",

}

const myfunction=function(){
     console.log("hii function ..");

}
console.log(typeof myfunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*
   -----------Table 20 — typeof Operator Results-------
Type of val------------>>	Result
Undefined	------------>>"undefined"
Null------------>>	"object"
Boolean------------>>	"boolean"
Number	------------>>"number"
String------------>>	"string"
Object (native and does not implement [[Call]])------------>>	"object"
Object (native or host and does implement [[Call]])------------>>	"function"
Object (host and does not implement [[Call]])------------>>	 Implementation-defined except may not be             "undefined", "boolean", "number", or "string".
*/