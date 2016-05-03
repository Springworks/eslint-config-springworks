const exec = require('child_process').exec;
const tap = require('tap');

const PATH = `./node_modules/.bin:${process.env.PATH}`;

tap.test('main test', t => {
  exec('eslint --config index.js test/fixtures/main-fixture.js', { env: { PATH } }, (error, stdout, stderr) => {
    t.equal(stdout, '', stdout);
    t.equal(stderr, '', stderr);
    t.error(error);
    t.end();
  });
});

tap.test('babel test', t => {
  exec('eslint --config babel.js test/fixtures/babel-fixture.js', { env: { PATH } }, (error, stdout, stderr) => {
    t.equal(stdout, '', stdout);
    t.equal(stderr, '', stderr);
    t.error(error);
    t.end();
  });
});

tap.test('mocha test', t => {
  exec('eslint --config mocha.js test/fixtures/mocha-fixture.js', { env: { PATH } }, (error, stdout, stderr) => {
    t.equal(stdout, '', stdout);
    t.equal(stderr, '', stderr);
    t.error(error);
    t.end();
  });
});
