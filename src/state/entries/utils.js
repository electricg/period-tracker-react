const DateFnsDifferenceInDays = require('date-fns/difference_in_days');
const DateFnsAddDays = require('date-fns/add_days');
const DateFnsFormat = require('date-fns/format');

/**
 * // TODO test
 * Return today's date
 * @returns {String} format of the date is YYYY-M-D
 */
const getToday = () => {
  const date = new Date();

  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

/**
 * // TODO test
 * Return date object with the time set to noon UTC
 * @param {String} date - format of the date is YYYY-MM-DD or YYYY-M-D
 * @return {Object}
 */
const newDate = (date = '') => {
  const _date = date || getToday();
  return new Date(`${_date}T12:00:00.000Z`);
};

/**
 * Sort dates in ascending order
 * @param {String[]} dates - format of the date is YYYY-MM-DD
 * @returns {String[]} format of the date is YYYY-MM-DD
 */
const sortDates = (dates = []) => {
  if (!Array.isArray(dates)) {
    return [];
  }

  return [...dates].sort();
};

/**
 * Remove duplicated items from array
 * @param {String[]} dates
 * @returns {String[]}
 */
const deleteDuplicatedDates = (dates = []) => {
  if (!Array.isArray(dates)) {
    return [];
  }

  return [...new Set(dates)];
};

/**
 * Check if item already exist in the array
 * @param {String} date - string to search for
 * @param {String[]} dates - array to search in
 * @returns {Boolean} true if it exists
 */
const doesDateExists = (date = '', dates = []) => {
  if (!Array.isArray(dates)) {
    return false;
  }

  const index = dates.indexOf(date);

  return index !== -1;
};

/**
 * Calculate difference in days between each item and its previous one
 * @param {String[]} dates - format of the date is YYYY-MM-DD
 * @returns {Number[]} positive integers
 */
const calcDatesRanges = (dates = []) => {
  if (!Array.isArray(dates)) {
    return [];
  }

  return dates.reduce((acc, date, index) => {
    const prev = dates[index - 1];

    // Because I want the same number of returned items, the first range is 0
    if (!prev) {
      acc.push(0);
      return acc;
    }

    const diff = DateFnsDifferenceInDays(newDate(date), newDate(prev));
    // I don't want negative ranges
    acc.push(Math.abs(diff));

    return acc;
  }, []);
};

/**
 * Create an array of dates including the $cover following days
 * @param {String[]} dates - format of the date is YYYY-MM-DD
 * @param {Number} cover - number of days to include for each date, must be positive
 * @returns {String[]} format of the date is YYYY-MM-DD
 */
const calcDatesCovered = (dates = [], cover = 0) => {
  if (!Array.isArray(dates)) {
    return [];
  }

  if (cover <= 0) {
    return [...dates];
  }

  return dates.reduce((acc, date) => {
    const oDate = newDate(date);
    acc.push(date);

    for (let i = 1; i <= cover; i++) {
      const n = DateFnsAddDays(oDate, i);
      acc.push(DateFnsFormat(n, 'YYYY-MM-DD'));
    }

    return acc;
  }, []);
};

const calcFutureDates = () => {};

const addEntry = () => {};

const removeEntry = () => {};

module.exports.sortDates = sortDates;
module.exports.deleteDuplicatedDates = deleteDuplicatedDates;
module.exports.doesDateExists = doesDateExists;
module.exports.calcDatesRanges = calcDatesRanges;
module.exports.calcDatesCovered = calcDatesCovered;
