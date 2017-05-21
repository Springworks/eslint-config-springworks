module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "plugins": [
    "springworks"
  ],
  "rules": {
    "springworks/no-logger-format-payload": 1,
    "springworks/no-require-file-extension": 2,

    "array-bracket-spacing": [2, "never"],
    "arrow-parens": [1, "as-needed"],
    "arrow-spacing": [2, { "before": true, "after": true }],
    "block-scoped-var": 2,
    "brace-style": [2, "stroustrup"],
    "callback-return": [2, ["callback", "cb", "next", "done", "resolve", "reject"]],
    "comma-dangle": [2, "always-multiline"],
    "comma-spacing": [2, { "before": false, "after": true }],
    "comma-style": [2, "last"],
    "complexity": 0,
    "computed-property-spacing": [2, "never"],
    "consistent-return": 2,
    "consistent-this": [1, "self"],
    "constructor-super": 2,
    "curly": [2, "all"],
    "default-case": 2,
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eol-last": 2,
    "eqeqeq": 2,
    "func-names": 0,
    "func-style": [2, "declaration", { "allowArrowFunctions": true }],
    "generator-star-spacing": [2, { "before": true, "after": false }],
    "global-require": 2,
    "guard-for-in": 2,
    "handle-callback-err": [2, "^(.+_)?err(or)?$"],
    "indent": 0,
    "init-declarations": 0,
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": 2,
    "linebreak-style": [2, "unix"],
    "lines-around-comment": 0,
    "max-nested-callbacks": [1, 4],
    "new-cap": [2, { "newIsCap": true, "capIsNew": true, "capIsNewExceptions": ["Array", "Boolean", "Number", "String", "Symbol"] }],
    "new-parens": 2,
    "newline-after-var": 0,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-catch-shadow": 0,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-console": 2,
    "no-const-assign": 2,
    "no-constant-condition": 1,
    "no-continue": 0,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 2,
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implicit-coercion": 0,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-invalid-this": 0,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-mixed-requires": [2, true],
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [2, { "max": 3 }],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": [1, { "props": true }],
    "no-path-concat": 2,
    "no-process-env": 0,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-restricted-modules": [1, "bluebird", "chai", "should", "should-http", "should-promised", "should-sinon", "sinon", "sinon-chai"],
    "no-return-assign": [2, "always"],
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 1,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unexpected-multiline": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],
    "no-use-before-define": [2, "nofunc"],
    "no-useless-call": 2,
    "no-useless-computed-key": 2,
    "no-useless-escape": 2,
    "no-var": 2,
    "no-warning-comments": 1,
    "no-whitespace-before-property": 2,
    "no-with": 2,
    "object-curly-spacing": [2, "always"],
    "object-shorthand": [1, "methods"],
    "one-var": [2, "never"],
    "operator-assignment": 0,
    "operator-linebreak": [2, "after"],
    "padded-blocks": [2, "never"],
    "prefer-arrow-callback": 1,
    "prefer-const": 1,
    "prefer-reflect": 0,
    "prefer-template": 1,
    "quote-props": [2, "as-needed"],
    "quotes": [2, "single", "avoid-escape"],
    "require-yield": 2,
    "semi": [2, "always"],
    "semi-spacing": [2, { "before": false, "after": true }],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": 0,
    "strict": [2, "global"],
    "template-curly-spacing": 1,
    "use-isnan": 2,
    "valid-jsdoc": [2, { "prefer": { "returns": "return" }, "requireReturn": false, "requireParamDescription": false, "requireReturnDescription": false }],
    "valid-typeof": 2,
    "vars-on-top": 0,
    "wrap-iife": 2,
    "wrap-regex": 1,
    "yoda": [2, "never"]
  }
};
