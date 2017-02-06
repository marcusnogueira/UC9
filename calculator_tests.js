// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    allClear();
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    allClear();
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});

// Test for changing a number to negative
QUnit.test( "Change sign test", function( assert ) {
    allClear();
    addDigit('2');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-2", "Passed - Expected -2");
});

// Test For changing a number to a percentage
QUnit.test( "Change number into a percentage", function( assert ) {
    allClear();
    addDigit('4');
    addDigit('2');
    percentage();
    assert.equal(document.getElementById("screen").value, "0.42", "Passed - Expected 0.42");
});

// Sqaure a number
 QUnit.test( "Sqaure a number test", function( assert ) {
     allClear();
     addDigit('8');
     square();
     assert.equal(document.getElementById("screen").value, "64", "Passed - Expected 64");
 });


// Test for finding the inverse of a number
QUnit.test( "Find inverse test", function( assert ) {
    allClear();
    addDigit('5');
    inverse();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});


//Find a square root of a Number
QUnit.test( " Find the sqaure root of a number", function( assert ){
    allClear();
    addDigit('4')
    addDigit('9')
    sqaureRoot()
    assert.equal(document.getElementById("screen").value, "7", "Passes - Expected 7");

})







































// Test for factorials
QUnit.test( "Factorial test", function( assert ) {
    allClear();
    addDigit('5');
    factorial();
    assert.equal(document.getElementById("screen").value, "120", "Passed - Expected 120");
});

// Test for digit limit
QUnit.test( "Digit Limit Test", function( assert ) {
    allClear();
    // Function to add many digits to the screen
    function manyDigits(digit, times) {
        for (i=0; i< times; i++) {
            addDigit(digit);
        }
    }
    manyDigits('5', 100);
    assert.equal(document.getElementById("screen").value, "555555555555555555555555555555", "Passed - Expected 30 digits");
});
