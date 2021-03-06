/**
 * @file      Dekatrian.js
 * @version   1.0.1
 * @author    Vitor Guia <vitor.guia@vitortec.com>
 * @copyright 2011-2018 Vitortec.com
 * @license   GPL-3.0-or-later
 * @see       {@link https://devs.vitortec.com/dekajs|Documentation of Dekajs}
 */

/**
  * Some methods to convert dates between Dekatrian and Gregorian calendar
  *
  * @version   1.0.1
  * @author    Vitor Guia <vitor.guia@vitortec.com>
  * @copyright 2011-2018 Vitortec.com
  * @license   GPL-3.0-or-later
  * @see       {@link https://devs.vitortec.com/dekajs|Documentation of Dekajs}
  */
class Dekatrian {
  /**
   * Check if a year is leap year or not
   *
   * @private
   *
   * @param {integer} year Dekatrian year
   *
   * @return {boolean} Dekatrian year is leap year or not
   */
  static checkLeapYear (year) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true
    }
    if (year % 400 === 0) {
      return true
    }
    return false
  }

  /**
   * Check if a Dekatrian date is valid or not
   *
   * @param {integer} year  Dekatrian year
   * @param {integer} month Dekatrian month
   * @param {integer} day   Dekatrian day
   *
   * @return {boolean} Dekatrian date is valid or not
   */
  static checkDekatrian (year, month, day) {
    if (this.checkLeapYear(year)) {
      if (month === 0 && day > 2) {
        return false
      }
    } else {
      if (month === 0 && day > 1) {
        return false
      }
    }
    if (month > 13 || day > 28) {
      return false
    }
    return true
  }

  /**
   * Convert a Dekatrian date to Gregorian date
   *
   * @param {integer} year  Dekatrian year
   * @param {integer} month Dekatrian month
   * @param {integer} day   Dekatrian day
   *
   * @return {string} Gregorian date eg. 2018-12-31
   */
  static dekatoGreg (year, month, day) {
    if (!this.checkDekatrian(year, month, day)) {
      return false
    }

    // leap year
    if (this.checkLeapYear(year)) {
      // Sinchronian day
      if (month === 0 && day === 2) {
        return year + '-1-2'
      }

      day++
    }

    // Achronian day
    if (month === 0 && day === 1) {
      return year + '-1-1'
    }

    var dayYear = (month * 28) - 28 + day + 1
    var gregDate = new Date(year, 0)
    gregDate = new Date(gregDate.setDate(dayYear))
    var gregYear = gregDate.getFullYear()
    var gregMonth = gregDate.getMonth() + 1
    var gregDay = gregDate.getDate()

    return gregYear + '-' + gregMonth + '-' + gregDay
  }

  /**
   * Convert a Gregorian date to Dekatrian dat
   *
   * @param {integer} year  Gregorian year
   * @param {integer} month Gregorian month
   * @param {integer} day   Gregorian day
   *
   * @return{string} Dekatrian date eg. 2018-13-28
   */
  static gregToDeka (year, month, day) {
    var yearDay = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
    yearDay = yearDay[month] + day - 1

    // leap year
    if (this.checkLeapYear(year)) {
      // Sinchronian day
      if (month === 1 && day === 2) {
        return year + '-0-2'
      }

      day--
    }

    // Achronian day
    if (month === 1 && day === 1) {
      return year + '-0-1'
    }

    var dekaMonth = Math.floor(yearDay / 28)
    var dekaDay = yearDay - (dekaMonth * 28)
    dekaMonth++

    if (!dekaDay) {
      dekaDay = 28
      dekaMonth--
    }

    return year + '-' + dekaMonth + '-' + dekaDay
  }
}

module.exports = Dekatrian
