console.log("Hello World");
// Variables
var myName = "Hamza Nasir";
// You Can Reassign The Variable in let
var myAge = 23;
// You Cant Change The Value in Const
//Casses
//1-camelCase
var myNumber = "camelCase";
//2-PascalCase
var MyAddress = "PascalCase";
//3-$case
var $anyThing = "$case";
//4-_case
var _anyThing = "UnderScore Case";
// Block Scope
// You Cant Use Assign variables Out OF Block {};
function greetings() {
    var greet = "Asalam Alikum";
}
// console.log(greet); // Error: Cannot find name 'greet'
// Global Scope/ Functional Scope
// You Can Assign a Variables Out Side The Function And Use It in The Block Of Code {} 
var greet1 = "Aslam Alikum";
var myName2 = "Hamza Nasir";
function greeting() {
    console.log("".concat(greet1, " ").concat(myName2));
}
//Data Types 
//1-"String"      ---------------------  
//2-number => 12                      |
//3-Boolean => true/False             | => Primitive Type
//4-Undefined => let myNAme1;         |
//5-Null  -----------------------------
//6-bigint => 1000000000000000000000000000000000000000000000000000000000000000000000
//7-Symbols => Emojis
//8-Any => 
//9-Unknown
//10-Void
// String
var str = "IMRAN KHAN";
// Number
var nbr = 804;
//Boolean
var bln = true;
//Undefined
var pm;
// Null
var val = null;
// using Union Type
var value = "Hello";
if (value !== null) {
    console.log(value.toUpperCase()); // Safe to use value here
}
else {
    console.log("Value is null");
}
// Bigint 
// // let a: bigint = 1000000000000000000000000000000000000000n;
// // let b:bigint = 2000000000000000000000000000000000000000n;
// let sum: bigint = a + b;
// let difference: bigint = a - b;
// let product: bigint = a * b;
// let quotient: bigint = a / b;
// let remainder: bigint = a % b;
// console.log(sum);        // 3000000000000000000000000000000000000000n
// console.log(difference); // -1000000000000000000000000000000000000000n
// console.log(product);    // 2000000000000000000000000000000000000000000000000000000000000000000000n
// console.log(quotient);   // 0n
// console.log(remainder);  // 1000000000000000000000000000000000000000n
// Any Type
var name1 = "Hamza Nasir";
// name1 = 23; // It Through Error: Type 'number' is not assignable to type 'string'
// But
//if
var name2 = "Hamza Nasir";
name2 = 23;
//Now Its Oki To Change The Data Type In Same Variable
// its Change In Any Type Like Boolean,Biging,Undefined ete ete
//Unknown Type
// As Sir Hamza Said Any Type Remove Power From Typescript
// But
//Unknown Type Gives A Power To Typescript
// That First Check What Is The Data Type  with The Help Of "typeof" And Then
// Apply Methods Relate With It.
var value1 = "Hello, TypeScript!";
if (typeof value === "string") {
    console.log(value.toUpperCase()); // Safe to use string methods
}
value1 = 42;
if (typeof value1 === "number") {
    console.log(value1.toFixed(2)); // Safe to use number methods
}
// Void Type
// Basicaly Void Type Use In A Function Who Does Not Return A Value
function logMessage(message) {
    console.log(message);
}
logMessage("Hello, TypeScript!"); // Logs "Hello, TypeScript!" to the console
// But IF We Return A Value It Gives You AN Error
function logMessage1(message) {
    // return message; // Error: Type 'string' is not assignable to type 'void'
}
logMessage("Hello, TypeScript!");
// Void Is Also Use In A Variables 
var voidVariable;
voidVariable = undefined; // When Vali is Nothing Or Undefined Its Valid
//But 
// When We GIve A VAlue To This Variable its Shows Error
// voidVariable = 1; // Error: Type '1' is not assignable to type 'void'
// Non-Primitive
// 1-Object
var obj = {
    name: "Hamza Nasir",
    age: 23,
};
var obj2 = obj;
// obj2.heyThere = "Hamza Nasir"
// 2-Array
// A Container That Store Multiple Data And Multiple Types Of Data
var arr = [1, 2, 3, 4, 5];
// Arrays Methods
//Push
arr.push(6); // This Method Add Value After The Last Index of An Array
//Pop
arr.pop(); // This Method Removes the last element from an array and returns it.
//Shift
arr.shift(); // This Method Removes the first element from an array and returns it
//Unshift
arr.unshift(0); // This Method inserts new elements at the start of an array,
// and returns the new length of the array.
//Map
//This Method is used to create a new array populated with the results of calling 
//a provided function on every element in the calling array.
// This method is very useful for transforming data in arrays.
// This method does not modify the original array but returns a new array.
var doubled = arr.map((function (num) { return num * 2; }));
console.log(doubled);
//ForEach
//This Method iterates over each element of an array sequentially, executing a callback function for each element.
//Unlike map, forEach does not create a new array or return any value.
//its changes in existing Array.
var doubled1 = arr.forEach(function (num) {
    console.log(num * 4);
});
console.log(doubled1);
//Slice
//This method is used to extract a section of an array and return a new array
// arr.slice(start,end)
// Its Like A Slice Of Cake 
var fruits = ['apple', 'banana', 'cherry', 'date', 'strawberry'];
var slicedFruits1 = fruits.slice(1, 3);
console.log(slicedFruits1); // ['banana', 'cherry']
var slicedFruits2 = fruits.slice(2);
console.log(slicedFruits2); // ['cherry', 'date', 'elderberry']
var slicedFruits3 = fruits.slice(-2);
console.log(slicedFruits3); // ['date', 'elderberry']
var slicedFruits4 = fruits.slice();
console.log(slicedFruits4); // Shallow copy of the entire array
//Splice
// method is used to change the contents of an array by removing or replacing existing elements 
//and/or adding new elements in place.
// It modifies the original array and returns an array containing the deleted element
// array.splice(start, deleteCount, item1, item2, ...);
// Removing Elements
var removedFruits = fruits.splice(2, 2);
console.log(removedFruits); // ['cherry', 'date']
console.log(fruits); // ['apple', 'banana', 'strawberry']
//Adding Elements
fruits.splice(1, 0, 'Mango');
console.log(fruits); // ["apple","Mango","Banana","strawberry"]
// Replacing Elements
fruits.splice(2, 1, 'leachy');
console.log(fruits); // ['apple', 'Mango', 'leachy', 'strawberry']
// You Can Use Index To acces The Values Of Arrays
//fruits.index => 012345
fruits[0]; // Index Starts With 0 And Go On
//fruits.lenght => 123456
console.log(fruits.length);
// lenght counting Starts With 1 And Go On 
// 3-Function
// a function is a block of code designed to perform a specific task or calculation. 
//        Thats a Perameters
//            |        |
function sum(a, b) {
    console.log(a + b);
}
// Calling Function
sum(2, 4); // Output is 6
// Perametors
// that are used to receive input values when the function is called.
// These input values are passed to the function to perform some operations or calculations
// Default Perameters
function sum1(c, d) {
    if (d === void 0) { d = 3; }
    console.log(c + d);
}
// Calling Function
sum1(2); // Output is 5
// Optional Perameters
function sum2(e, f) {
    console.log(e);
}
// Calling Function
sum2(2); // Output is 2
// Function With Return
//return refers to the action of sending back a value from a function
// after it has completed its execution. 
function sum3(g, h) {
    return g + h;
}
// Calling Function
sum3(2, 4); // Output is 6
// 4-Arrow-Function
//  Same As Normal Function But Different Syntax
var sum4 = function () {
    console.log("Arrow Function");
};
sum4();
// JSON Object 
// {
// "name" : "Hamza Nasir",
// "age" : 23,
// "Gender" : "Male"
//}
// Keys of JSON Object Is In Inverted Commas
// But Not In Object
// Sntyx Error
// Cant Change Reserve Keyword
// letttt userName = "Hamza Nasir";
// Type Error 
// let myAge1 = 23;
// myAge1 = "23";
// Strong Typing
// let myAge2 = 23; => Type Inference
//let myAge3 : number = 23; => Strong Type
// Type Error
// let age : number = 23;
//age = "23";
// Accessibilty Error
// Block Scope And GLobal Scope
