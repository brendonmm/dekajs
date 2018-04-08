/**
 * @file      DekatrianTest.js
 * @version   1.0.1
 * @author    Vitor Guia <vitor.guia@vitortec.com>
 * @copyright 2011-2018 Vitortec.com
 * @license   GPL-3.0-or-later
 * @see       {@link https://devs.vitortec.com/dekajs|Documentation of Dekajs}
 */

/* global describe, it */

var assert = require('assert')
var Dekatrian = require('../src/Dekatrian')

describe('Check leap year', function () {
  it('400 year', function (done) {
    assert.ok(Dekatrian.checkLeapYear(400))
    done()
  })
})

describe('Check Dekatrian', function () {
  it('Error 2016-0-3', function (done) {
    assert.ifError(Dekatrian.dekatoGreg(2016, 0, 3))
    done()
  })

  it('Error 2018-0-2', function (done) {
    assert.ifError(Dekatrian.dekatoGreg(2018, 0, 2))
    done()
  })

  it('Error 2018-14-2', function (done) {
    assert.ifError(Dekatrian.dekatoGreg(2018, 14, 2))
    done()
  })
})

describe('Dekatrian to Gregorian', function () {
  it('Achronian day', function (done) {
    assert.equal('2018-1-1', Dekatrian.dekatoGreg(2018, 0, 1))
    done()
  })

  it('Sinchronian day', function (done) {
    assert.equal('2016-1-2', Dekatrian.dekatoGreg(2016, 0, 2))
    done()
  })

  it('Other day', function (done) {
    assert.equal('2016-12-31', Dekatrian.dekatoGreg(2016, 13, 28))
    done()
  })
})

describe('Gregorian to Dekatrian', function () {
  it('Achronian day', function (done) {
    assert.equal('2018-0-1', Dekatrian.gregToDeka(2018, 1, 1))
    done()
  })

  it('Sinchronian day', function (done) {
    assert.equal('2016-0-2', Dekatrian.gregToDeka(2016, 1, 2))
    done()
  })

  it('Other day', function (done) {
    assert.equal('2016-13-28', Dekatrian.gregToDeka(2016, 12, 31))
    done()
  })
})
