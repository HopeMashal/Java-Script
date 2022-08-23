//! For .. In Loop
const myObject = {
  regularPlay : 23432,
  watsonChallenge : 5432,
  tournamentOfChampions : 6332,
  battleOfTheDecades : 64234
};

for(let prop in myObject){
  console.log(prop);
  console.log(myObject[prop]);
}

let total = 0;
for(let prop in myObject){
  total += myObject[prop];
}

console.log(`Ken Jennings Total Earning: ${total}`);

for (let k in [88,99,77,66]){
  console.log(k); // 0,1,2,3 ==> Index
}