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

//! String Escape Characters 


//! String Template Literals 

//! Null & Undefined 

//! Math Object & Random Numbers 

//! typeof Operator

//! parseInt & parseFloat 
