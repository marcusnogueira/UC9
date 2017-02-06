// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});


//Test for changing a number to a percentage
QUint.test( "Change Number to a percentage", function ( assert ) {
 current_input=(15) / 100
    displaycurrent_input
    assert.equal(document.getElementById("screen").value), "0.15" "Passed - Expected 0.15"
}
