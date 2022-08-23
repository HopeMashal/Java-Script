//! Booleans 
let isLoggedIn = true;
let gameOver = false;
const isWaterWet = true;

//? Variable can change type Ex:

let numDonuts = 12;
numDonuts = false;
numDonuts = 1234;

//! Strings 
let firstName = "Hope";
let lastName = "Mashal";
let MyName = firstName+" "+lastName; // Hope Mashal
let msg = "Hi There!! My name is Hope/Amal";
let name = 'Hope';
let num = 87;

typeof firstName; //String
typeof num; //Number

//! String Indices 
let myMsg ="Hello    "; 
myMsg.length; // 9
myMsg[0]; // H
myMsg[100]; // undefined

//! String Methods 
let Letter = "  You are very cool!  ";
Letter.toUpperCase();
Letter.toLowerCase();
Letter.trim(); //You are very cool! (without space)
Letter.trim().toUpperCase();

let tvShow = 'catdog';
tvShow.indexOf('cat'); //0
tvShow.indexOf('dog'); //3
tvShow.indexOf('z'); //-1 (NOT Found)

let str='HelloThereMyNameHope';
str.slice(0,5); //Hello
str.slice(5); //ThereMyNameHope

let annoyingLaugh = 'teehee so funny! teehee!';
annoyingLaugh.replace('teehee','hahaha'); //hahaha so funny! hahaha!

let text = "How are you doing today?";
const myArr1 = text.split("").join(',');// H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
console.log(myArr1);
const myArr2 = text.split(" ", 3).join(','); // How,are,you
console.log(myArr2);
const myArr3 = text.split("o").join(','); // H,w are y,u d,ing t,day?
console.log(myArr3);


//! String Escape Characters 
/* 
    \n - newline
    \' - single quote
    \" - double quote
    \\ - backslash 
    \t - new tab
*/

//! String Template Literals 
let x = `I counted ${3+4} sheep`; //I counted 7 sheep
let y = "Hope";
let z = `My name is ${y}`; //My name is  Hope 
let z2 = "My name is "+ y ; //My name is  Hope 

//! Null & Undefined 
//? Null: Intentional absence of any value, must be assigned
//? Undefined: VAriables that do not have an assigned value are undefined

//! Math Object & Random Numbers 
Math.PI; //3.14159265358..
Math.round(4.9); //5
Math.round(4.4); //4
Math.abs(-456); //456
Math.pow(2,5); //32
Math.floor(3.999); //3
Math.random(); // number between 0 to 1

//! typeof Operator
typeof 'hello'; // string
typeof 2; //number
typeof true; // boolean

//! parseInt & parseFloat 
parseInt('24'); //24
parseInt('24.53'); // 24
parseInt('26Hello'); //26
parseFloat('24.321');//24.321
parseFloat('3'); //3
parseFloat('I ate 3 shramp'); //NaN