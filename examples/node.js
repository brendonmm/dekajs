/**
 * @file      node.js
 * @version   1.0.1
 * @author    Vitor Guia <vitor.guia@vitortec.com>
 * @copyright 2011-2018 Vitortec.com
 * @license   GPL-3.0-or-later
 * @see       {@link https://devs.vitortec.com/dekajs|Documentation of Dekajs}
 */

var Dekatrian = require('../src/Dekatrian')

var year = 2017
var month = 0
var day = 1

if (Dekatrian.checkDekatrian(year, month, day)) {
  console.log('Dekatrian date is valid')
} else {
  console.log('Dekatrian date is invalid')
}

console.log('Dekatrian: ' + year + '-' + month + '-' + day)
console.log('Gregorian: ' + Dekatrian.dekatoGreg(year, month, day))
console.log('')

year = 2016
month = 12
day = 31
console.log('Gregorian: ' + year + '-' + month + '-' + day)
console.log('Dekatrian: ' + Dekatrian.gregToDeka(year, month, day))
