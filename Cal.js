var currentInput = "0";
var memory = "0";
var operator = 0;


/**
 * [[This is a helper function for displaying the current input
 */

function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}


/**
 * @param {function} dig [[This function is used to add the digit to the display
 */

function addDigit(dig) {
    if (currentInput.length == 30) {
        currentInput = currentInput;
    } else if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
        currentInput = dig;
    } else {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}

// Adds a decimal to the current input
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    } else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}

// Clears everything.
function allClear() {
    currentInput = "0";
    operator = 0;                //clear operator
    memory = "0";                  //clear memory
    displayCurrentInput();
}

// Stores the last operator pushed for multiply, divide, add, or subtract.
function storeOperator(op) {
    if (op.indexOf("*") > -1) { operator = 1; };       //codes for *
    if (op.indexOf("/") > -1) { operator = 2; };       // slash (divide)
    if (op.indexOf("+") > -1) { operator = 3; };       // sum
    if (op.indexOf("-") > -1) { operator = 4; };       // difference
    if (op.indexOf("^") > -1) { operator = 5; };       // exponent

    memory = currentInput;                 //store value
    currentInput = "0";
    displayCurrentInput();
}

// Calculate using operator, the memory and what is current
function calculate() {
    if (operator == 1) { currentInput = eval(memory) * eval(currentInput); };
    if (operator == 2 && currentInput == 0) { currentInput = "ERROR: Divide by 0"; } else if (operator == 2) { currentInput = eval(memory) / eval(currentInput); };
    if (operator == 3) { currentInput = eval(memory) + eval(currentInput); };
    if (operator == 4) { currentInput = eval(memory) - eval(currentInput); };
    if (operator == 5) { currentInput = Math.pow(memory, currentInput); };

    operator = 0;                //clear operator
    memory    = "0";              //clear memory
    displayCurrentInput();
}

function changeSign() {
    currentInput = currentInput * -1;
    displayCurrentInput();
}

// Clear the current input back to 0
function clearCurrent() {
    currentInput = "0";
    displayCurrentInput();
}

// Change the current input to a percentage
function percentage() {
    currentInput = currentInput / 100;
    displayCurrentInput();
}

// Calculate the factorial of the current input
function factorial() {
    if (currentInput == 0) {
        currentInput = 1;
    }
    if (currentInput < 0) {
        currentInput = "ERROR: Input must be >0";
    }
    for (var i = currentInput; --i; ) {
        currentInput = currentInput * i;
    }
    displayCurrentInput();
}

// Calculate the square of the current input
function square() {
    currentInput = currentInput * currentInput;
    displayCurrentInput();
}

// Calculate the square root of the current input
function squareRoot() {
    currentInput = Math.sqrt(currentInput);
    displayCurrentInput();
}

// Calculate the inverse of the current input
function inverse() {
    currentInput = 1 / currentInput;
    displayCurrentInput();
}

// Return the sine of a number
function sine() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput();
}

// Return the cosine of a number
function cosine() {
    currentInput = Math.cos(currentInput);
    displayCurrentInput();
}

// Return the tangent of a number
function tangent() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput();
}

// Return the sine of a number in degrees
function sineDegrees() {
    currentInput = Math.sin(currentInput * Math.PI/180);
    displayCurrentInput();
}

// Return the cosine of a number in degrees
function cosineDegrees() {
    currentInput = Math.cos(currentInput * Math.PI/180);
    displayCurrentInput();
}

// Return the tangent of a number in degrees
function tangentDegrees() {
    currentInput = Math.tan(currentInput * Math.PI/180);
    displayCurrentInput();
}

function mc() {
    memory = "0";
    displayCurrentInput();
}

function mPlus() {
    memory = eval(memory) + eval(currentInput);
    displayCurrentInput();
}

function mMinus() {
    memory = eval(memory) - eval(currentInput);
    displayCurrentInput();
}

function mr() {
    currentInput = memory;
    displayCurrentInput();
}

function changeSign() {
    currentInput = currentInput * -1;
    displayCurrentInput();
}
