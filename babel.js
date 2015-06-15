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

    // enforce the spacing around the * in generator functions (off by default)
    "generator-star-spacing": [2, "before"],

    // require let or const instead of var (off by default)
    "no-var": 1,

    // require method and property shorthand syntax for object literals (off by default)
    "object-shorthand": [1, "always"],

    // suggest using of const declaration for variables that are never modified after declared (off by default)
    "prefer-const": 1

  }
};
