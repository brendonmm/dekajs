var Dekatrian = require('../src/Dekatrian')

var dekajs = new Dekatrian()

var year = 2018
var month = 0
var day = 1

if (dekajs.checkDekatrian(year, month, day)) {
  console.log('Dekatrian date is valid')
} else {
  console.log('Dekatrian date is invalid')
}

console.log('Dekatrian: ' + year + '-' + month + '-' + day)
console.log('Gregorian: ' + dekajs.dekatoGreg(year, month, day))

console.log('')

year = 2016
month = 12
day = 31

console.log('Gregorian: ' + year + '-' + month + '-' + day)
console.log('Dekatrian: ' + dekajs.gregToDeka(year, month, day))
