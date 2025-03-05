'use strict';

/* let hasDriversLisence = false;
const passTest = true;

if(passTest) hasDriversLisence = true;
if(hasDriversLisence) console.log('I can drive'); */

/* function logger(){
    console.log("My name is Abin");
}

// Calling /running / invoking a function
logger();


function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num); 
*/


/* 
// function declaration
function calcAge1(birthYear){
   return 2025 - birthYear;
}
const age1 = calcAge1(1997)
console.log(age1);

// Function Expression
const calcAge2 = function(birthYear){
    return 2025 - birthYear;
}
const age2 = calcAge2(1997)
console.log(age2);
 */

/* 
// Arrow funtion
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1997)
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearUntilRetirement(1997, 'Abin'));
 */

function cutFruitPieses(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieses(apples);
    const orangePieces = cutFruitPieses(oranges);

    const juice  = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    
    return juice;
}

console.log(fruitProcessor(2, 3));