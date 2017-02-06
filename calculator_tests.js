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
 QUnit.test( "Sqaure A Number", function( assert ) {
     allClear();
     addDigit('8');
     square();
     assert.equal(document.getElementById("screen").value, "64", "Passed - Expected 64");
 });


// Text for finding the inverse of a number
QUnit.test( "Find inverse test", function( assert ) {
    allClear();
    addDigit('5');
    inverse();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});
