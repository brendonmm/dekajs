# Dekajs
DEKAtrian for JavaScript

[![Software License](https://img.shields.io/github/license/vitorteccom/dekajs.svg)](LICENSE)
[![Latest Version on NPM](https://img.shields.io/npm/v/vitorteccom-dekajs.svg)](https://npmjs.org/packages/vitorteccom-dekajs)
[![Total Downloads](https://img.shields.io/npm/dt/vitorteccom-dekajs.svg)](https://npmjs.org/packages/vitorteccom-dekajs)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/vitorteccom/dekajs/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/vitorteccom/dekajs/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/vitorteccom/dekajs/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/vitorteccom/dekajs/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/vitorteccom/dekajs/badges/build.png?b=master)](https://scrutinizer-ci.com/g/vitorteccom/dekajs/build-status/master)

This is a simple library for converting dates between [Dekatrian](https://www.facebook.com/dekatrian/) and [Gregorian](https://en.wikipedia.org/wiki/Adoption_of_the_Gregorian_calendar) calendars. This library is not official.

This package is compatible with code style [Standard](https://github.com/standard/standard).

## Structure
This is the directory structure.

```
coverage/
docs/
examples/
node_modules/
src/
tests/
```


## Install

Via NPM.

``` bash
$ npm install vitorteccom-dekajs
```

## Usage
This is minimal example node.

``` javascript
var Dekatrian = require('vitorteccom-dekajs')

var dekajs = new Dekatrian()
```

Check date is valid.

``` javascript
dekajs.checkDekatrian(2018, 13, 28)
//Return boolean, true.
```

Convert from dekatrian to gregorian.

``` javascript
dekajs.dekatoGreg(2018, 13, 28)
//Return string, 2018-12-31.
```

Convert from gregorian to dekatrian.

``` javascript
dekajs.gregToDeka(2018, 12, 31)
//Return string, 2018-13-28.
```

## Change log

Please see [CHANGELOG](docs/CHANGELOG.md) for more information on what has changed recently.

## Testing
Test with [Mocha](https://mochajs.org), we also recommend [Istanbul](https://istanbul.js.org).

``` bash
$ npm run test
```

## Contributing

Please see [CONTRIBUTING](docs/CONTRIBUTING.md) and [CODE_OF_CONDUCT](docs/CODE_OF_CONDUCT.md) for details.

## Security

If you discover any security related issues, please email ``contato@vitortec.com`` instead of using the issue tracker.

## Credits

- [Vitor Guia](https://github.com/vitoranguia)
- [All Contributors](../../contributors)

## License

GPLv3. Please see [License File](LICENSE) for more information.
