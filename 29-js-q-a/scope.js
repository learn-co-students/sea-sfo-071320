// Global scope
var globalVar = 'hi';

function myFunction() {
  // Local scope #1
  var myVariable = 'hello';

  function innerFunction() {
    // Local scope #3
    var innerVar = 'potato';
    // console.log(globalVar);
  }

  innerFunction();
}

function myOtherFunction() {
  // Local scope #2
}

myFunction();

if (true) {
  var hello = 'hello';
  const hi = 'hi';
  let bye = 'bye';
}

console.log(bye);
