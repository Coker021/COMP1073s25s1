class SmoothieMachine {
    // STEP 1: Create a class to handle the smoothie machine functionality
    // Constructor
    constructor(name, email, telephone, quantity, size, flavor, ingredients) {
        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.quantity = quantity;
        this.size = size;
        this.flavor = flavor;
        this.ingredients = ingredients;
    }

    // STEP 2: Add a method to display the order summary
    displayOrder(){
        return `Order Summary:
        Name: ${this.name}
        Email: ${this.email}
        Telephone: ${this.telephone}
        Quantity: ${this.quantity}
        Size: ${this.size}
        Flavor: ${this.flavor}
        Ingredients: ${this.ingredients.join(', ')}`;
    }

    // STEP 3: Add a method to get the id of the elements
    SmoothieOrder() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const telephone = document.getElementById('telephone').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const size = document.getElementById('size').value;
        const flavor = document.getElementById('flavor').value;
        const ingredients = document.getElementById('ingredients').selectedOptions;
        const ingredientsArray = Array.from(ingredients).map(option => option.value);

        // STEP 4: Add Smoothie IMG
        let cup = document.createElement("img");
        cup.setAttribute("src", "images/smoothie-cup.svg");

        // Set the size of the cup SVG image based on the selected size
        switch(size) {
            case "small":
                cup.setAttribute("height", "100px");
                break;
            case "medium":
                cup.setAttribute("height", "150px");
                break;
            case "large":
                cup.setAttribute("height", "200px");
                break;
            default:
                cup.setAttribute("height", "150px");
        }

        // STEP 5: Create a new SmoothieMachine instance
        const smoothieOrder = new SmoothieMachine(name, email, telephone, quantity, size, flavor, ingredientsArray);

        // STEP 6: Add Pricing to SmoothieMachine()
        const prices = {
            small: 5.00,
            medium: 7.50,
            large: 10.00
        };

        let price = prices[size];

        const totalPrice = price * quantity;

        const smoothie = {name, email, telephone, quantity, size, flavor, ingredients, totalPrice};
        localStorage.setItem('smoothieOrder', JSON.stringify(smoothie));

        // STEP 7: Display the order summary
        document.getElementById('checkout-form').innerHTML = smoothieOrder.displayOrder();
        document.getElementById('totalPrice').textContent = `$${totalPrice}`;
        

    }
    
}