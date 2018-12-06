# NPM Boilerplate Node

[![Build Status](https://flat.badgen.net/travis/risan/npm-boilerplate-note)](https://travis-ci.org/risan/npm-boilerplate-note)
[![Test Covarage](https://flat.badgen.net/codecov/c/github/risan/npm-boilerplate-note)](https://codecov.io/gh/risan/npm-boilerplate-note)
[![Greenkeeper](https://badges.greenkeeper.io/risan/npm-boilerplate-note.svg?style=flat-square)](https://greenkeeper.io)
[![Latest Version](https://flat.badgen.net/npm/v/npm-boilerplate-note)](https://www.npmjs.com/package/npm-boilerplate-note)

Boilerplate for creating an NPM module for Node environment.

## Install

```bash
$ npm install npm-boilerplate-node
```

## Usage

```js
const foo = require("npm-boilerplate-node");

(async () => {
  const result = foo("bar");

  console.log(result);
})();
```

## API

```js
foo(bar, [baz])
```

### Parameters

* `bar` (`String`): Requires string.
* `baz` (optional `Object`): Optional object, default to `{}`.

### Returns

It returns a `Promise` which when resolved contains something.

## Developing NPM Module

Download the boilerpate:

```bash
wget https://github.com/risan/npm-boilerplate-node/archive/master.zip \
    -O master.zip && \
    unzip master.zip && \
    mv npm-boilerplate-node-master my-package && \
    rm master.zip
```

Toolings:

* [Jest](https://jestjs.io/) for testing.
* [ESLint](https://eslint.org/) for linting.
* [Prettier](https://prettier.io/) for code formatting.

Available scripts:

* `npm run lint`: Run the linter.
* `npm run lint-fix`: Apply the linter fixes.
* `npm run test`: Run the tests.

Third-party services:

* [Travis CI](https://travis-ci.org/) for continous integration.
* [Codecov](https://codecov.io/) for test coverage report.
* [Greenkeeper](https://greenkeeper.io/) for automated dependency management.

## Related

* [npm-boilerplate-node-browser](https://github.com/risan/npm-boilerplate-node-browser): Boilerplate for creating an NPM module both for Node and browser environments.

## License

[MIT](https://github.com/risan/npm-boilerplate-node/blob/master/LICENSE) © [Risan Bagja Pradana](https://bagja.net)
