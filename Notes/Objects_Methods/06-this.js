//! 'This' Keyword

function sayHi() {
  console.log("HI")
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const greet = function () {
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

//! This in Methods

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    //In a method, this refers to the object the method "lives" in:
    const {
      first,
      last,
      nickName
    } = this;
    return `${first} ${last } AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`)
  }
}

//! This invocation Context

const Person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    //In a method, this refers to the object the method "lives" in
    const {
      first,
      last,
      nickName
    } = this;
    return `${first} ${last } AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`)
  },
  laugh: () => {
    //Arrow functions don't get their 'own' this.
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHAH`)
  }
}

// INVOCATION CONTEXT MATTERS!!!
Person.printBio(); //THIS refers to the person object

const printBio = Person.printBio;
printBio(); //THIS refers to window object