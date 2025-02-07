/*
let age = 30;
age = 31;
console.log(age);

const currentYear = 2025;
// currentYear = 2024;
// const date;

var job = 'developer';
job = 'manager';

*/

/*
const present = 2025;
const abinAge = present - 1997;
const alexAge = present - 1880;
console.log(abinAge, alexAge)

const firstname = 'Abin';
const lastName = 'Rajan';
console.log(firstname + lastName);

*/

/*
const firstname = 'Abin';
const job = 'developer';
const birthYear = 1997;
const year = 2025;

const abin = "I'm " + firstname + ", a " + (year - birthYear) + ' years old ' + job + '!';
console.log(abin);

const abinNew = `I'm ${firstname}, a ${year - birthYear} years old ${job}!`;
console.log(abinNew);

console.log(`Simple string...`)

console.log('String with \n\ multiple \n\ lines');

console.log(`String with
    multiple
    lines`);

*/

/*
const age =1;
const oldEnough = age>=18

if(oldEnough){
    console.log('Eligible ')
}else{
    console.log('Nop')
}

const birthYear = 1997;
let century;
if(birthYear <= 200){
    century = 20;
}else{
    century = 21;
}

console.log(century);
*/

/*  
const inputYear = '1997';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('ABIN'));
console.log(typeof NaN)
*/


/*
const age = '18';
if(age === 18) console.log("You became an adult");

if(age == 18) console.log("You became an adult loose");

const num = prompt("What's your age?");
console.log(num);
console.log(typeof num);
*/

let age = 25;

const drink = age>=18 ? "Wine" : "Water";
console.log(drink);

console.log(`I like to drink ${age>=28 ? 'Wine' : 'Water'}`);