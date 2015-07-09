module.exports = {
  "env": {
    "mocha": true
  },

  "plugins": [
    "mocha"
  ],

  "rules": {

    // Override to allow asserting that a function throws: (function() { fn(); }).should.throw();
    "no-wrap-func": 0,

    // Override to allow use of synchronous functions in tests. Useful when loading fixtures for example.
    "no-sync": 0,

    // Increase the maximum depth callbacks can be nested.
    "max-nested-callbacks": [1, 8],

    "padded-blocks": 0,

    "no-extra-parens": 0,

    // Enforces handling of callbacks for async tests.
    "mocha/handle-done-callback": 2,

    // Reminds you to remove .only from your tests.
    "mocha/no-exclusive-tests": 2

  }
};
