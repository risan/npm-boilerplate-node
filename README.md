# Send Request

[![Build Status](https://flat.badgen.net/travis/risan/npm-boilerplate-node)](https://travis-ci.org/risan/npm-boilerplate-node)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/npm-boilerplate-node)](https://codeclimate.com/github/risan/npm-boilerplate-node)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/npm-boilerplate-node)](https://codeclimate.com/github/risan/npm-boilerplate-node)
[![Latest Stable Version](https://flat.badgen.net/npm/v/npm-boilerplate-node)](https://www.npmjs.com/package/npm-boilerplate-node)
[![Node Version](https://flat.badgen.net/npm/node/npm-boilerplate-node)](https://www.npmjs.com/package/npm-boilerplate-node)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/npm-boilerplate-node)](https://github.com/risan/send-request/blob/master/LICENSE)

NPM boilerplate for a Node library.

## Install

```bash
$ npm install npm-boilerplate-node

# Or if you use Yarn
$ yarn add npm-boilerplate-node
```

## Quick Start

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

## Scripts

Available scripts:

* `yarn lint`: Run the linter.
* `yarn lint-fix`: Apply the linter fixes.
* `yarn test`: Run the tests.

## License

MIT © [Risan Bagja Pradana](https://bagja.net)
