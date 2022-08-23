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
