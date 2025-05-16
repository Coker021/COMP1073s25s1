/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;


/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Taiwo";
myAge = 21;
const myH1 = document.querySelector("h1");


/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myName = "Coker";
myAge = 22;


// STEP 4: Variable types (use typeof in the console)
// Numbers
let numCars = 5;
//console.log(typeof numCars);
// Strings (use '' or "")
let manufacturer = `Mercedes`;
// Booleans
let isCarCool = true;
// Arrays
let myCarArray = ["Honda", "Mercedes", "Toyota", "Tesla", "Ford"];
let myMixedArray = ["Taiwo", false, 33];
let myMultiArray = [
                    ["Money","Spend","Cost"],
                    ["Car","Boat","Plane"]
                ]
// Objects

let myDog = {
    name: "Max",
    breed: "German-Sheperd",
    size: "large",
    age: 6,
    goodDog: true
};
myDog.forEach(element => {
    console.log(element)
});
Object.entries(myDog).forEach((element) => console.log(element));
// STEP 5: Typing (JavaScript is a loosely-typed language)
