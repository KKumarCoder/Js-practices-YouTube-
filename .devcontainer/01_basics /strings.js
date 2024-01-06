const name="krishna";
const repoCount=40;
console.log(name+repoCount+"total");
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
const value=new String('pintoo kumar');
console.log(value);
console.log(value.length);
console.log(value.toLowerCase);
console.log(value.charAt(2));
 console.log(value.indexOf('t'));
 const newstring=value.substring(1,4);
 console.log(newstring);
 const anotherString=value.slice(-8,4);//- revresed string 
 console.log(anotherString);
  
 const newstringOne="   krishna   ";
  //this concept is used in user form fill
 console.log(newstringOne);
 // .. krishna..  
 console.log(newstringOne.trim());
 //krishna
//--------------------------------------------------
 const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";


const url="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart";
const updateval=url.replace('Global_Objects','kridshna');
console.log(updateval)
console.log(url);
console.log(url.includes('JavaScript'));


//----How to convered in to ARRAY form-------
const str1=new String('krishna-pintoo-mukesh-nandkishor');
console.log(str1.split('-'));
// Output:-[ 'krishna', 'pintoo', 'mukesh', 'nandkishor' ]
//--------------------------------------------------
const str3 = 'Saturday night plans';

console.log(str3.startsWith('Sat'));
// Expected output: true

console.log(str3.startsWith('Sat', 3));
// Expected output: false