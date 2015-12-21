'use strict';

/**
  This file works as an example for non-es6 code that should pass a linting according to the rules in this repo.
  If you change a rule and it does not apply to this example code, please extend this code.
*/

require('assert');


function otherExampleFunction() {
  return null;
}

function exampleFunction(example_param) {
  const str = `a ${example_param} b`;
  const num = 10.0;

  const array = [1, 2, 3, 4];
  const multiline_array = [
    1,
    2,
    3,
    4,
  ];

  const object = { foo: 1, bar: 2 };
  const multiline_object = {
    foo: 1,
    bar: 2,
  };

  // Example if statement
  if (num > str.length) {
    otherExampleFunction(10.0);
  }
  else if (num > 5) {
    otherExampleFunction([object, multiline_object]);
  }
  else {
    otherExampleFunction({ foo: array, bar: multiline_array });
  }
}

exampleFunction('passedExampleString');
