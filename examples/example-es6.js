/**
  This file works as an example for es6 code that should pass a linting according to the rules in this repo.
  If you change a rule and it does not apply to this example code, please extend this code.
*/


function exampleFunction(exampleParam, exampleFuncParam) {
  return exampleFuncParam(exampleParam);
}


exampleFunction('foo', param => {
  return `something ${param}`;
});
