var animal = 'dog';

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  
  return animal
}

function add2(n) {
  const two = 2;
  return n + two

  // Feel free to move things around!
  //const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = funkyFunction()();
=======
var theFunk = funkyFunction();
console.log(theFunk);
>>>>>>> 08590293571b52654718d490881d9a320e7a4325
