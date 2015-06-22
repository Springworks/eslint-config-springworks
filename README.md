# eslint-config-springworks

ESLint configurations used by [Springworks](http://www.springworks.se).


## Installation

```bash
$ npm i -DE eslint eslint-plugin-mocha eslint-config-springworks
```

When extending `springworks/babel`, also install `babel-eslint`

```bash
$ npm i -D babel-eslint
```


## Usage

This package includes the configurations:

- `springworks` - default configuration
- `springworks/mocha` - mocha test configuration
- `springworks/babel` - extends the default configuration for use with [babel](https://babeljs.io/) and ES6 features

Place an `.eslintrc` file in the project root that extends either `springworks` or `springworks/babel`:

```json
{
  "extends": "springworks"
}
```

Place a second `.eslintrc` file in the test folder that extends `springworks/mocha`:

```json
{
  "extends": "springworks/mocha"
}
```
