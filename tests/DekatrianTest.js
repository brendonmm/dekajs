/* global describe, it */

var assert = require('assert')
var Dekatrian = require('../src/Dekatrian')

var dekajs = new Dekatrian()

describe('Check leap year', function () {
  it('400 year', function (done) {
    assert.ok(dekajs.checkLeapYear(400))
    done()
  })
})

describe('Check Dekatrian', function () {
  it('Error 2016-0-3', function (done) {
    assert.ifError(dekajs.dekatoGreg(2016, 0, 3))
    done()
  })

  it('Error 2018-0-2', function (done) {
    assert.ifError(dekajs.dekatoGreg(2018, 0, 2))
    done()
  })

  it('Error 2018-14-2', function (done) {
    assert.ifError(dekajs.dekatoGreg(2018, 14, 2))
    done()
  })
})

describe('Dekatrian to Gregorian', function () {
  it('Achronian day', function (done) {
    assert.equal('2018-1-1', dekajs.dekatoGreg(2018, 0, 1))
    done()
  })

  it('Sinchronian day', function (done) {
    assert.equal('2016-1-2', dekajs.dekatoGreg(2016, 0, 2))
    done()
  })

  it('Other day', function (done) {
    assert.equal('2016-12-31', dekajs.dekatoGreg(2016, 13, 28))
    done()
  })
})

describe('Gregorian to Dekatrian', function () {
  it('Achronian day', function (done) {
    assert.equal('2018-0-1', dekajs.gregToDeka(2018, 1, 1))
    done()
  })

  it('Sinchronian day', function (done) {
    assert.equal('2016-0-2', dekajs.gregToDeka(2016, 1, 2))
    done()
  })

  it('Other day', function (done) {
    assert.equal('2016-13-28', dekajs.gregToDeka(2016, 12, 31))
    done()
  })
})
