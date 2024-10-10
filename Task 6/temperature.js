// Get input for temperature value and unit
let temperature = parseFloat(prompt("Enter the temperature value:"));
let unit = prompt("Enter the unit of temperature (C, F, or K):").toUpperCase();

// Get input for target temperature unit
let targetUnit = prompt("Enter the target unit of temperature (C, F, or K):").toUpperCase();

// Define constants for temperature conversions
const CELSIUS_TO_KELVIN = 273.15;
const FAHRENHEIT_TO_CELSIUS = 32;
const FAHRENHEIT_TO_KELVIN = 459.67;
const KELVIN_TO_CELSIUS = 273.15;
const KELVIN_TO_FAHRENHEIT = 459.67;

// Initialize temperature variables
let celsius = "";
let fahrenheit = "";
let kelvin = "";

// Convert temperature based on unit
switch (unit) {
    case "C":
    // Convert Celsius to Kelvin and Fahrenheit
    celsius = temperature;
    kelvin = celsius + CELSIUS_TO_KELVIN;
    fahrenheit = celsius * 9/5 + FAHRENHEIT_TO_CELSIUS;
    break;
    case "F":
    // Convert Fahrenheit to Celsius and Kelvin
    fahrenheit = temperature;
    celsius = (fahrenheit - FAHRENHEIT_TO_CELSIUS) * 5/9;
    kelvin = (fahrenheit + FAHRENHEIT_TO_KELVIN) * 5/9;
    break;
    
case "K":
    // Convert Kelvin to Celsius and Fahrenheit
    kelvin = temperature;
    celsius = kelvin - KELVIN_TO_CELSIUS;
    fahrenheit = kelvin * 9/5 - KELVIN_TO_FAHRENHEIT;
    break;
    
default:
    // Display error message for invalid unit
    console.log("Invalid unit of temperature. Please enter C, F, or K.");
    break;
}

// Convert temperature to target unit
switch (targetUnit) {
case "C":
// Convert temperature to Celsius
console.log("Temperature in Celsius: " + celsius.toFixed(2) + "°C");
break;
case "F":
    // Convert temperature to Fahrenheit
    console.log("Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + "°F");
    break;
    
case "K":
    // Convert temperature to Kelvin
    console.log("Temperature in Kelvin: " + kelvin.toFixed(2) + " K");
    break;
    
default:
    // Display error message for invalid target unit
    console.log("Invalid target unit of temperature. Please enter C, F, or K.");
    break;
}