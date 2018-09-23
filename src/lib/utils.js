import DateFnsDifferenceInDays from 'date-fns/difference_in_days';
import DateFnsAddDays from 'date-fns/add_days';
import DateFnsFormat from 'date-fns/format';
import DateFnsEachDay from 'date-fns/each_day';
import DateFnsStartOfWeek from 'date-fns/start_of_week';
import DateFnsEndOfWeek from 'date-fns/end_of_week';
import DateFnsAddMonths from 'date-fns/add_months';
import DateFnsSubMonths from 'date-fns/sub_months';
import DateFnsEndOfMonth from 'date-fns/end_of_month';
import DateFnsStartOfMonth from 'date-fns/start_of_month';

/**
 * Get month number from date
 * @param {Object} date Object Date
 * @returns {Number} month number starting from 1
 */
export const getMonth = date => {
  return date.getMonth() + 1;
};

/**
 * Return today's date
 * @returns {String} format of the date is YYYY-MM-DD
 */
export const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const _month = getMonth(date);
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
export const newDate = (date = '') => {
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
export const sortDates = (dates = []) => {
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
export const deleteDuplicatedDates = (dates = []) => {
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
export const doesDateExists = (date = '', dates = []) => {
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
export const calcDatesRanges = (dates = []) => {
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
export const calcDatesCovered = (dates = [], cover = 0) => {
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
export const calcFutureDates = (lastDate, untilDate, range = 28) => {
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

/**
 * Return list of weekdays names starting by the day passed as parameter
 * @param {Number} weekStartsOn index of the first day of the week - 0 Sunday, 1 Monday, 6 Saturday
 * @returns {String[]}
 */
export const getWeekdaysNames = (weekStartsOn = 0) => {
  const now = new Date();
  const week = DateFnsEachDay(
    DateFnsStartOfWeek(now, { weekStartsOn }),
    DateFnsEndOfWeek(now, { weekStartsOn })
  );
  return week.map(item => DateFnsFormat(item, 'ddd'));
};

/**
 *  Get year and month of one month after passed date
 * @param {Date} date
 * @returns {Date}
 */
export const getNextMonth = date => {
  return DateFnsAddMonths(date, 1);
};

/**
 *  Get year and month of one month before passed date
 * @param {Date} date
 * @returns {Date}
 */
export const getPrevMonth = date => {
  return DateFnsSubMonths(date, 1);
};

export const getMonthDays = (date, weekStartsOn = 0) => {
  const startOfMonth = DateFnsStartOfMonth(date);
  const endOfMonth = DateFnsEndOfMonth(date);
  const startOfWeek = DateFnsStartOfWeek(startOfMonth, { weekStartsOn });
  const endOfWeek = DateFnsEndOfWeek(endOfMonth, { weekStartsOn });
  const days = DateFnsEachDay(startOfWeek, endOfWeek);

  return days;
};

// const addEntry = () => {};

// const removeEntry = () => {};
