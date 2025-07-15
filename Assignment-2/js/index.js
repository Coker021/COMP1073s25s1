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

    
    
}