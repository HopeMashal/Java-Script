//! While Loop
for (let i = 0; i <= 5; i++) {
	console.log(i);
}

//Recreating the above for loop w/ a while loop:
let j = 0;
while (j <= 5) {
	console.log(j);
	j++;
}

// Pick a target number we are trying to guess
const target = Math.floor(Math.random() * 10);
// Make initial guess
let guess = Math.floor(Math.random() * 10);

// Continue looping while guess is not the target num
while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	// IMPORTANT!!
	// Update the value of guess each time through the loop
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);
