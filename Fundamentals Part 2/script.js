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


/* 
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
*/

/* 
const friend1 = 'Nikhil';
const friend2 = 'Akhil';
const friend3 = 'Niyas';

const friends = ['Nikhil', 'Akhil', 'Niyas'];
console.log(friends);

const years = new Array(1991, 1993, 1995);
console.log(years);

console.log(friends[0]);
console.log(friends.length);
 */

/* const friends = ['Nikhil', 'Akhil', 'Niyas'];
friends.push('Suhail');
console.log(friends); */

// Add elements - push() , unshift()
// Remove elements - pop() , shift()
// Tells the position - indexOf()
// Know if present in array - includes()

// [] -> Array
// {} -> Object

/* 
const abin = {
    firstName : 'Abin',
    lastName : 'Rajan',
    age : 2025 - 1997,
    job : 'Software Engineer',
    friends : ['Nihkil', 'Niyas']
}

console.log(abin);

//Dot notation
console.log(abin.firstName);
console.log(abin.lastName);
console.log(abin.friends);

//Bracket notation
console.log(abin['firstName']);
console.log(abin['lastName']);
console.log(abin['friends']);

const nameKey = 'Name';
console.log(abin['first' + nameKey]);

const interestedIn = prompt('What do you want to know about abin?');
console.log(abin[interestedIn]);
 */

/* 
const abin = {
    firstName : 'Abin',
    lastName : 'Rajan',
    birthYear : 1997,
    job : 'Software Engineer',
    friends : ['Nihkil', 'Niyas'],
    hasDriverLisence : true,
    // calcAge : function(birthYear) {
    //     return 2025 - birthYear;
    // }


        calcAge : function() {
        return 2025 - this.birthYear;
    }
};

// console.log(abin);
console.log(abin.calcAge()) 
*/

for(let i = 1; i<=10; i++){
    console.log(`Lifting weight ${i}`);
}