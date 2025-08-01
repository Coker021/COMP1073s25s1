/* STEP 1: Basic browser functions
There are a number of functions that are included with most modern browsers - the replace() function is just one of many */
let text = 'Functions are awesome';
let newText = text.replace("awesome", "amazing");
console.log(text + " " + newText);

// Interestingly, functions that are included with your browser are technically called 'methods' rather than functions.


/* STEP 2: Anonymous versus named functions */
const step2Button = document.querySelector("#step2");
// Anonymous
step2Button.onclick = function() {
    alert("This is an anonymous function!");
};
// Named function
function step2Alert() {
    alert("Named function called!");
}
step2Button.onclick = step2Alert;

/* STEP 3: Function parameters
Some methods or functions don't require any parameters (sometimes called arguments, properties, or attributes), while some do, and others are optional. */

// No parameters needed
let random = Math.random();
console.log(random);

// Two parameters needed
let functionText = "My random number is x.";
let newFunctionText = functionText.replace("x", random);
// Parameters optional
let lunchArray = ["spicy", "bean", "burrito"];
//let lunch = lunchArray.join();
let lunch = lunchArray.join(", ");
console.log(lunch);
// Next, open up scope.html and we will look at how the accessibility of variables depends on where they are defined/initialized.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions