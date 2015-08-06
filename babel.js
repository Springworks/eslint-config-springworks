module.exports = {
  "extends": "./",

  "parser": "babel-eslint",

  "env": {
    "es6": true
  },

  "rules": {

    // Override to warn about unnecessary Use Strict Directives
    "strict": [1, "never"],

    /**
     * ECMAScript 6
     * These rules are only relevant to ES6 environments and are off by default.
     */

    // require parens in arrow function arguments
    "arrow-parens": 0,

    // require parens in arrow function arguments
    "arrow-spacing": [2, { "before": true, "after": true }],

    // verify super() callings in constructors
    "constructor-super": 2,

    // enforce the spacing around the * in generator functions
    "generator-star-spacing": [2, { "before": true, "after": false }],

    // disallow modifying variables of class declarations
    "no-class-assign": 2,

    // disallow modifying variables that are declared using `const`
    "no-const-assign": 2,

    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 2,

    // require let or const instead of var
    "no-var": 1,

    // require method and property shorthand syntax for object literals
    "object-shorthand": [1, "always"],

    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": 1,

    // suggest using the spread operator instead of `.apply()`
    "prefer-spread": 2,

    // suggest using Reflect methods where applicable
    "prefer-reflect": 0,

    // disallow generator functions that do not have `yield`
    "require-yield": 2

  }
};
