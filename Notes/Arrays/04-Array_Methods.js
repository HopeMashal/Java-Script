//! Push and Pop
let topSongs = [
	'First Time Ever I Saw Your Face',
	'God Only Knows',
	'A Day In The Life',
	'Life On Mars'
];

// To add to the end of an array:
topSongs.push('Fortunate Son');
topSongs.push('Landslide');
topSongs.push(12324166);

// To remove the last item
topSongs.pop(); //12324166

//! Shift and Unshift
let dishesToDo = [ 'large platter' ];

//to add to the start:
dishesToDo.unshift('plate');

//add to the start again:
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('spoon');

//remove from the start:
dishesToDo.shift();

//! Concat
let fruits = [ 'apple', 'banana' ];
let veggies = [ 'asparagus', 'brussel sprouts' ];
let meats = [ 'steak', 'chicken breast' ];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFoods = fruits.concat(veggies, meats);

//! Includes and IndexOf
let ingredients = [
	'water',
	'corn starch',
	'flour',
	'cheese',
	'brown sugar',
	'shrimp',
	'eel',
	'butter'
];

//includes returns true or false
if (ingredients.includes('flour')) {
	console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

//indexOf returns an index (or -1 if not found)
if (ingredients.indexOf('shrimp') !== -1) {
	console.log('Sorry, I hate shrimp.');
}

//! Reverse and Join
let letters = [ 'T', 'C', 'E', 'P', 'S', 'E', 'R' ];

//Remember that reverse() mutates the original array.
//It reverses IN PLACE rather than making a copy
let song = letters.reverse().join('.');
//"R.E.S.P.E.C.T"

//! Slice
let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

let swimmers = animals.slice(0, 3);
console.log(swimmers);

let mammals = animals.slice(2, 4);

//One option:
// let reptiles = animals.slice(4, 6);

// Another option:
let reptiles = animals.slice(4);

let quadruped = animals.slice(-3);

//! Splice
let Animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
Animals.splice(1, 0, 'octopus');
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
Animals.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
Animals.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]

//! Sorting
let people = [ 'Mrs. Robsinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];

people.sort();
// ["Angie", "Jolene", "Maggie May", "Mrs. Robsinson", "Roxanne"]

let nums = [ 34, 10, 100000, 67, 99 ];

nums.sort();
//[10, 100000, 34, 67, 99]

//Sorts by converting values to strings and comparing their UTF-16 character codes.

//We will learn how to change this behavior later on!
