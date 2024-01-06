const accountID=4147752;
//accountID=55; //not allowed 
console.log(accountID);
let accountEmail="krishnakumar.snm004@gmail.com";
console.log(accountEmail);
accountEmail="krishna@45.com";
console.log(`update accountEmail${accountEmail}`);
let accountState;
console.log("account State without value ",accountState);
var accountPassword ="Indian@132";
console.log(accountPassword);
accountPassword="kris@8340";
console.log(`update accountPassword${accountPassword}`);

accountCity="jodhpur";
console.log(accountCity);
accountCity="Patna";
console.log(`update city :${accountCity}`);
//new logic to print console like syntaxes:-"console.table([ren,shyam,mohan])"
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);



