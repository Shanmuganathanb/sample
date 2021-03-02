console.log('Hello World');

// Using additional variable
let var1 = 10;
let var2 = 20;
let var3;
var3=var1;
var1=var2;
var2=var3;
console.log(var1,var2);

// Using addition,subtraction
var1 = 10;
var2 = 20;
var1 = var1+var2;
var2 = var1-var2;
var1 = var1-var2;
console.log(var1,var2);

// Using destructive method
var1 = 10;
var2 = 20;
[var1,var2]=[var2,var1]
console.log(var1,var2)

// Using Bitwise operation
var1 = 10;
var2 = 20;
var1 = var1^var2;
var2 = var1^var2;
var1 = var1^var2;
console.log(var1,var2)