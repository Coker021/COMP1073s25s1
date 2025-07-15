const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee{
    // variables/attributes
    size;
    isDecaf;
    // constructor
    constructor(size, isDecaf){
        this.size = size;
        this.isDecaf = isDecaf;
    }
    // methods
    // add a serveIt method
    serveIt(){
        // Generate an IMG of the coffee ordered
        let cup = document.createElement("img"); //<img>
        console.log(cup);
        // Set the src path for the IMG element
        cup.setAttribute("src", "images/coffee-cup.svg");
        console.log(cup);
        // Determine caffeine staus of the coffee
        if(this.isDecaf){
            cup.setAttribute("src", "images/coffee-cup-green.svg");
        }
        else{
            cup.setAttribute("src", "images/coffee-cup-purple.svg");
        }
        // Set the size of the cup SVG image based on this.size
        switch(this.size){
            case "small":
                // <img src="images/coffee-cup.svg" height="100px">
                cup.setAttribute("height", "100px");
                break;
            case "medium":
                // <img src="images/coffee-cup.svg" height="150px">
                cup.setAttribute("height", "150px");
                break;
            case "large":
                // <img src="images/coffee-cup.svg" height="200px">
                cup.setAttribute("height", "200px");
                break;
            default:
                // <img src="images/coffee-cup.svg" height="150px">
                cup.setAttribute("height", "150px");
        }
        // Size the IMG in terms of its height based on above number from the switch
        // Generate a description of the coffee and put it into the IMG title attribute
        cup.setAttribute("title", `A ${this.size} sized ${this.isDecaf ? "decaffeinated" : "caffeinated"} coffee.`);
        // Insert the new IMG element into the paragraph
        output.appendChild(cup);
    }
    
}

/* STEP 2: Instatiate a coffee based on the above constructor function */
let scottsCoffee = new Coffee("medium", false);
let robertCoffee = new Coffee("large", true);
let kathysCoffee = new Coffee("small", true);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */
scottsCoffee.serveIt();
robertCoffee.serveIt();
kathysCoffee.serveIt();
/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee {
    // variables/attributes
    milkType;
    // constructor
    constructor(size, isDecaf, milkType){
        // Call the parent class constructor
        super(size, isDecaf);
        this.milkType = milkType;
    }
    // methods
    latteDesc(){
        alert(`A ${this.size} sized latte with ${this.milkType} milk.`);
    }
}
/* STEP 6: Create a new instance of the Latte object */
let myLatte = new Latte("medium", false, "2%");

/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */
class moca extends Latte {
    // variables/attributes
    chocolateType;
    // constructor
    constructor(size, isDecaf, milkType, chocolateType){
        // Call the parent class constructor
        super(size, isDecaf, milkType);
        this.chocolateType = chocolateType;
    }
}
let myMoca = new moca("large", true, "almond", "dark chocolate");
myMoca.serveIt(); // This will call the serveIt() method from the parent class, Coffee
myMoca.latteDesc(); // This will call the latteDesc() method from the Latte
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
