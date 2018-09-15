const DateFnsDifferenceInDays = require('date-fns/difference_in_days');
const DateFnsAddDays = require('date-fns/add_days');
const DateFnsFormat = require('date-fns/format');

/**
 * Return today's date
 * @returns {String} format of the date is YYYY-MM-DD
 */
const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const _month = date.getMonth() + 1;
  const _day = date.getDate();

  const month = _month < 10 ? `0${_month}` : _month;
  const day = _day < 10 ? `0${_day}` : _day;

  return `${year}-${month}-${day}`;
};

/**
 * Return date object with the time set to noon UTC
 * @param {String} date - format of the date is YYYY-MM-DD
 * @return {Object}
 */
const newDate = (date = '') => {
  let _date;

  if (typeof date === 'string' && date) {
    _date = date;
  } else {
    _date = getToday();
  }

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

/**
 * Calculate future dates
 * @param {String} lastDate - format of the date is YYYY-MM-DD
 * @param {String} untilDate - format of the date is YYYY-MM-DD
 * @param {Number} range
 * @returns {String[]} format of the date is YYYY-MM-DD
 */
const calcFutureDates = (lastDate, untilDate, range = 28) => {
  if (!lastDate || !untilDate || range < 1) {
    return [];
  }

  let res = [];
  let _lastDate = lastDate;
  let _lastDateObj = newDate(_lastDate);

  while (_lastDate <= untilDate) {
    _lastDateObj = DateFnsAddDays(_lastDateObj, range);
    _lastDate = DateFnsFormat(_lastDateObj, 'YYYY-MM-DD');
    res.push(_lastDate);
  }

  return res;
};

// const addEntry = () => {};

// const removeEntry = () => {};

module.exports.getToday = getToday;
module.exports.newDate = newDate;
module.exports.sortDates = sortDates;
module.exports.deleteDuplicatedDates = deleteDuplicatedDates;
module.exports.doesDateExists = doesDateExists;
module.exports.calcDatesRanges = calcDatesRanges;
module.exports.calcDatesCovered = calcDatesCovered;
module.exports.calcFutureDates = calcFutureDates;
