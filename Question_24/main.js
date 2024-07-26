var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// Equality With Strings.
console.log("testing Equality With Strings:");
console.log("apple" == "apple"); //True
console.log("apple" == "Apple"); //False
//Using the lower case function.
console.log("testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); //True
//Numerical tests.
console.log("Numerical tests");
console.log(10 > 5); //True
console.log(2 < 1); //False
//tests using "and" and "or" operators.
console.log("tests with 'and' and 'or':");
console.log(true && false); //False
console.log(true, false); //True
//Test whether an item is in a array.
var Fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); //true
//Test whether an iten is not in a array.
console.log("Is 'mango' not in fruits?");
console.log(!Fruits.includes("mango")); //true
""(__makeTemplateObject(["||\n\n\n\n\n\n"], ["||\n\n\n\n\n\n"]));
