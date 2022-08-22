//! If Statement

// Example 1
if (1 === 1) {
	console.log("It's True!");
}

// Example 2
let rating = 3;

if (rating === 3) {
	console.log('YOU ARE A SUPERSTAR!');
}

// Example 3
let num = 37;

if (num % 2 !== 0) {
	console.log('ODD NUMBER!');
}


//! Else If Statement

// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?
let Rating = 1;

if (Rating === 3) {
	console.log('YOU ARE A SUPERSTAR!');
}
else if (Rating === 2) {
	console.log('MEETS EXPECTATIONS');
}
else if (Rating === 1) {
	console.log('NEEDS IMPROVEMENT');
}


//! Else Statement

// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?
let Rating1 = 2;

if (Rating1 === 3) {
	console.log('YOU ARE A SUPERSTAR!');
}
else if (Rating1 === 2) {
	console.log('MEETS EXPECTATIONS');
}
else if (Rating1 === 1) {
	console.log('NEEDS IMPROVEMENT');
}
else {
	console.log('INVALID RATING!');
}

// ========
//Example 2
// ========

let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
	console.log(`Congrats, you have the new high score of ${userScore}`);
	highScore = userScore;
}
else {
	console.log(
		`Good Game.  Your score of ${userScore} did not beat the high score of ${highScore}`
	);
}
