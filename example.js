'use strict';

/**
  This file works as an example for code that should pass a linting according to the rules in this repo.
  If you change a rule and it does not apply to this example code, please extend this code.
*/

function otherExampleFunction() {
  return null;
}

function exampleFunction(exampleParam) {
  var exampleStrVariable = exampleParam + 'otherExampleString';
  var exampleNumVariable = 10.0;

  var exampleArray = [1, 2, 3, 4];
  var exampleMultilineArray = [
    1,
    2,
    3,
    4,
  ];

  var exampleObject = { foo: 1, bar: 2 };
  var exampleMultilineObject = {
    foo: 1,
    bar: 2,
  };

  // Example if statement
  if (exampleNumVariable > exampleStrVariable.length) {
    otherExampleFunction(10.0);
  }
  else if (exampleNumVariable > 5) {
    otherExampleFunction([exampleObject, exampleMultilineObject]);
  }
  else {
    otherExampleFunction({ foo: exampleArray, bar: exampleMultilineArray });
  }
}

exampleFunction('passedExampleString');
