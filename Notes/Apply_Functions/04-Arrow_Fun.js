//! Arrow Functions

//Non-arrow function expression:
// const square = function (x) {
//   return x * x;
// }

// Equivalent arrow function:
const square = (x) => {
  return x * x;
}

//parens are option when you have 1 parameter
const isEven = num => {
  return num % 2 === 0;
}

//Must include parens for multiple parameters
const multiply = (x, y) => {
  return x * y;
}

// Must include parens for zero parameters
const greet = () => {
  console.log("HI!")
}

// "Regular" arrow function:
const Square = n => {
  return n * n;
}
// Implicit Return, on multiple lines using parens
const square1 = n => (
  n * n
)

// Implicit return one-liner:
const square2 = n => n * n;


const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// ALL THREE VERSIONS GIVE US THE SAME RESULT:
const doubles1 = nums.map(function (n) {
  return n * 2;
})

const doubles2 = nums.map(n => {
  return n * 2;
})

const doubles3 = nums.map(n => n * 2);


const parityList = nums.map(function (n) {
  if (n % 2 === 0) return 'even';
  return 'odd';
})

const parityList1 = nums.map((n) => {
  if (n % 2 === 0) return 'even';
  return 'odd';
});
const parityList2 = nums.map((n) => (
  n % 2 === 0 ? 'even' : 'odd'
));

const parityList3 = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');