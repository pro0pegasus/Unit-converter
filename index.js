/*
1 meter = 3.281 feet
  const conversionFactor = 3.28084; // 1 meter = 3.28084 feet
    return feet * 0.3048;

1 liter = 0.264 gallon \ galon = 3.78541 liter
1 kilogram = 2.204 pound / pound = 0.453592 kilogram
*/

/*
create ids 
grab btn and input id them in js
add eventlistner for the button when it triggered 
create functions that converts:
Meter/Feet
Liters/Gallons
Metric/Imperial Unit Conversion
*/

const buttonEl = document.getElementById("convert-button")
const inputEl = document.getElementById("quantity")
const meterandfeetEL = document.getElementById("meterandfeet")
const litersandgallonsEL = document.getElementById("litersandgallons")
const kilospoundsEL = document.getElementById("kilospounds")
let inputNumber
let result 
let result2 

buttonEl.addEventListener("click", function() {
    inputNumber = inputEl.value
    convertMeterFeet(inputNumber)
    convertLitersGallons(inputNumber)
    convertKilosPounds(inputNumber)
})



function convertMeterFeet(number) {
    result = number*3.28084
    result2 = number*0.3048
    meterandfeetEL.textContent = `${number} meters = ${result.toFixed(3)} feet | ${number} feet = ${result2.toFixed(3)} meters`
}

function convertLitersGallons(number) {
    result = number*0.264172
    result2 = number*3.78541
    litersandgallonsEL.textContent = `${number} liters = ${result.toFixed(3)} galons | ${number} galons = ${result2.toFixed(3)} liters`
}

function convertKilosPounds(number) {
    result = number*2.20462
    result2 = number*0.453592
    kilospoundsEL.textContent = `${number} kilos = ${result.toFixed(3)} pounds | ${number} pounds = ${result2.toFixed(3)} kilos`
}