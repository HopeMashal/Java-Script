//! And Logic

// EXAMPLE 1
let password = 'chicken Gal';

if (password.length >= 8 && password.indexOf(' ') === -1) {
	console.log('VALID PASSWORD');
}
else {
	console.log('INVALID PASSWORD');
}

// EXAMPLE 2
// Number must be between 1 and  10
let num = 1;

if (num >= 1 && num <= 10) {
	console.log('Number is between 1 and 10');
}
else {
	console.log('Please guess a number between 1 and 10');
}


//! OR Logic

let age = 77;

if (age < 6 || age >= 65) {
	console.log('YOU GET IN FOR FREE');
}
else {
	console.log('YOU MUST PAYYYY!');
}

// EXAMPLE 2
// WE CAN USE MULTIPLE OR's:
let color = 'violet';
if (color === 'purple' || color === 'lilac' || color === 'violet') {
	console.log('GREAT CHOICE!');
}
