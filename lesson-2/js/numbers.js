/* STEP 1: Number types (integer, float, and double)
        declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
        let myInt = 5;
        let myFloat = 6.3456;
        let myDouble = 7.937429753846;
        let myBinary = 0B011000101010101;
        let myHex = 0X04F6E2;
        let MyBitwise = -~-~-~0;
        // Note - there are also different number systems: binary, octal, and hexadecimal

        /* STEP 2: Arithmetic operators
        + (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
        let step2a = 5 + 2;
        console.log(step2a);
        let step2b = 5 + "2";
        console.log(step2b);
        let step2c = "5" + "2";
        console.log(step2c);

        let step2d = 5 * 2;
        console.log(step2d);
        let step2e = 5 / 2;
        console.log(step2e);
        let step2f = 5 % 2;
        console.logn(step2f);
        let step2g = 5 ** 2;
        console.log(step2g);

        // Try declaring and initializing a couple of variables as numbers
        let num1 = 90;
        let num2 = 30;
        let step2h = num1 * num2 / 8 + 2 - 0.5;
        console.log(`Value of step2h is ${step2h}.`);

        /* OR… num1 * num2 / 8 + 2 - 0.5; */

        /* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
        num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */
        let step2i = (num1 + num2) * 5 - 25;
        console.log(`Value of step2i is ${step2i}.`);
        
        /* If you want to avoid this precedence, use parenthesis
        (num1 + num2) * 5 - 25 */

        /* STEP 3: Increment and decrement operators
        ++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
        let step3 = 5;

        // Note 1 - you cannot increment/decrement a number directly
        // Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

        /* STEP 4: Assignment Operators
        = (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
        let step4 = 5;
        step4 += 2; // Or step4 = step4 + 2
        console.log(step4);

        /* STEP 5: Comparison Operators
        ===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
        let step5a = 5;
        let step5b = 4;

        let step5c = step5a == step5b;
        console.log(step5c);
