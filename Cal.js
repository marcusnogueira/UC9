var current_input = "0";
var memory = "0";
var operator = 0;


/**
 * [[This is a helper function for displaying the current input
 */

function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}


/**
 * @param {function} dig [[This function is used to add the digit to the display
 */

function addDigit(dig) {
    if (current_input.length == 30) {
        current_input = current_input;
    } else if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    } else {
        current_input = current_input + dig;
    }
    displayCurrentInput();
}

/**
 * [[This function adds the decimal to the current input ]]
 */

function addDecimal() {
    if (current_input.length == 0) {
        //no leading ".", use "0."
        current_input = "0.";
    } else {
        // First make sure one doesn't exist
        if (current_input.indexOf(".") == -1) {
            current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}


/**
 * [[The function clears the current display,memory and operator]]
 */

function allClear() {
    current_input = "0";
    operator = 0;                //clear operator
    memory = "0";                  //clear memory
    displayCurrentInput();
}

// Stores the last operator pushed for multiply, divide, add, or subtract.
/**
 * Stores operator
 * @param {function} op [[The function stores the operations]]
 */

function storeOperator(op) {
    if (op.indexOf("*") > -1) { operator = 1; };       //codes for *
    if (op.indexOf("/") > -1) { operator = 2; };       // slash (divide)
    if (op.indexOf("+") > -1) { operator = 3; };       // sum
    if (op.indexOf("-") > -1) { operator = 4; };       // difference
    if (op.indexOf("^") > -1) { operator = 5; };       // exponent

    memory = current_input;                 //store value
    current_input = "0";
    displayCurrentInput();
}

// Calculate using operator, the memory and what is current.
/**
 * [This function uses the operations to solve for an answer]]
 */

function calculate() {
    if (operator == 1) { current_input = eval(memory) * eval(current_input); };
    if (operator == 2 && current_input == 0) { current_input = "ERROR: Divide by 0"; } else if (operator == 2) { current_input = eval(memory) / eval(current_input); };
    if (operator == 3) { current_input = eval(memory) + eval(current_input); };
    if (operator == 4) { current_input = eval(memory) - eval(current_input); };
    if (operator == 5) { current_input = Math.pow(memory, current_input); };

    operator = 0;                //clear operator
    memory    = "0";              //clear memory
    displayCurrentInput();
}
/**
 * [[This function makes the inout negative]]
 */

function changeSign() {
    current_input = current_input * -1;
    displayCurrentInput();
}

// Clear the current input back to 0
/**
 * [[This function makes the current value 0]]
 */

function clearCurrent() {
    current_input = "0";
    displayCurrentInput();
}

// Change the current input to a percentage
/**
 * This function makes the current value into a percentage
 */

function percentage() {
    current_input = current_input / 100;
    displayCurrentInput();
}

// Calculate the factorial of the current input
/**
 * This function calculates the factorial of a number
 */

function factorial() {
    if (current_input == 0) {
        current_input = 1;
    }
    if (current_input < 0) {
        current_input = "ERROR: Input must be >0";
    }
    for (var i = current_input; --i; ) {
        current_input = current_input * i;
    }
    displayCurrentInput();
}

// Calculate the square of the current input
/**
 * This function squares the current input
 */

function square() {
    current_input = current_input * current_input;
    displayCurrentInput();
}

// Calculate the square root of the current input
/**
 * [[This function finds the sqaure root of a number]]
 */

function squareRoot() {
    current_input = Math.sqrt(current_input);
    displayCurrentInput();
}

// Calculate the inverse of the current input
/**
 * [[This function finds the inverse of the current input]]
 */

function inverse() {
    current_input = 1 / current_input;
    displayCurrentInput();
}

// Return the sine of a number
/**
 * This function finds the sine of a number and returns it to the current display
 */

function sine() {
    current_input = Math.sin(current_input);
    displayCurrentInput();
}

// Return the cosine of a number
/**
 * [[The function finds the cosine of a number and returns it to the current display
 */

function cosine() {
    current_input = Math.cos(current_input);
    displayCurrentInput();
}

// Return the tangent of a number
/**
 * [[This function finds the tangent of a number and returns it to the current display]]
 */

function tangent() {
    current_input = Math.tan(current_input);
    displayCurrentInput();
}

// Return the sine of a number in degrees
/**
 * [[The function finds the sine of anumber in degrees and returns it to the current display
 */

function sineDegrees() {
    current_input = Math.sin(current_input * Math.PI/180);
    displayCurrentInput();
}

// Return the cosine of a number in degrees
/**
 * This function returns the cosine of a number in degrees and returns it to the current docs
 */

function cosineDegrees() {
    current_input = Math.cos(current_input * Math.PI/180);
    displayCurrentInput();
}

// Return the tangent of a number in degrees
/**
 * This function finds the tangent of a number in degrees and returns it to the current display
 */

function tangentDegrees() {
    current_input = Math.tan(current_input * Math.PI/180);
    displayCurrentInput();
}
/**
 *  This function clears the memory of the calculator to 0
 */

function mc() {
    memory = "0";
    displayCurrentInput();
}
/**
 * This function adds a number to the memory
 */

function mPlus() {
    memory = eval(memory) + eval(current_input);
    displayCurrentInput();
}
/**
 * This function subtracts a number from the memory
 */

function mMinus() {
    memory = eval(memory) - eval(current_input);
    displayCurrentInput();
}
/**
 * This function stores the current input as memory
 */

function mr() {
    current_input = memory;
    displayCurrentInput();
}



