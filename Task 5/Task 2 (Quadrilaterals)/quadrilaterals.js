// Get input for side lengths and angles
var side1 = parseFloat(prompt("Enter the length of side 1:"));
var side2 = parseFloat(prompt("Enter the length of side 2:"));
var side3 = parseFloat(prompt("Enter the length of side 3:"));
var side4 = parseFloat(prompt("Enter the length of side 4:"));
var angle1 = parseFloat(prompt("Enter the angle of corner 1 in degrees:"));
var angle2 = parseFloat(prompt("Enter the angle of corner 2 in degrees:"));
var angle3 = parseFloat(prompt("Enter the angle of corner 3 in degrees:"));
var angle4 = parseFloat(prompt("Enter the angle of corner 4 in degrees:"));

// Check for square
if (side1 === side2 && side2 === side3 && side3 === side4 && angle1 === 90 && angle2 === 90 && angle3 === 90 && angle4 === 90) {
    console.log("It's a square!");
}
// Check for rectangle
else if (side1 === side3 && side2 === side4 && angle1 === 90 && angle2 === 90 && angle3 === 90 && angle4 === 90) {
    console.log("It's a rectangle!");
}
// Check for rhombus
else if (side1 === side2 && side2 === side3 && side3 === side4 && ((angle1 === angle3 && angle1 < 90) || (angle2 === angle4 && angle2 < 90))) {
    console.log("It's a rhombus!");
}
// Check for parallelogram
else if (side1 === side3 && side2 === side4 && angle1 === angle3 && angle2 === angle4) {
    console.log("It's a parallelogram!");
}
else {
    console.log("It's none of the specified quadrilaterals.");
}
   