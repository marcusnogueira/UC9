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

<<<<<<< HEAD

//Test for changing a number to a percentage
QUint.test( "Change Number to a percentage", function ( assert ) {
 current_input=(15) / 100
    displaycurrent_input
    assert.equal(document.getElementById("screen").value), "0.15" "Passed - Expected 0.15"
}
=======
// Test for changing a number to negative
QUnit.test( "Change sign test", function( assert ) {
    allClear();
    addDigit('2');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-2", "Passed - Expected -2");
});
>>>>>>> UC10/master
