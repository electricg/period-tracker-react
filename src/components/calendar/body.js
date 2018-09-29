import React from 'react';
import DateFnsFormat from 'date-fns/format';
import classnames from 'classnames';

import { getToday, getMonth, getMonthDays } from '../../lib/utils';

import './day.css';

export const CalendarBodyDay = ({ date, currentMonth = 0, entries = [] }) => {
  const day = DateFnsFormat(date, 'D');
  const month = getMonth(date);
  const formattedDate = DateFnsFormat(date, 'YYYY-MM-DD');
  const today = getToday();

  const namespaceClasses = 'calendar__day';

  const cellClasses = classnames({
    [namespaceClasses]: true,
    [`${namespaceClasses}--today`]: today === formattedDate,
    [`${namespaceClasses}--another-month`]: month !== currentMonth,
    [`${namespaceClasses}--entry`]: entries.indexOf(formattedDate) !== -1,
  });

  return <td className={cellClasses}>{day}</td>;
};

export const CalendarBodyWeek = ({
  days = [],
  currentMonth = 0,
  entries = [],
}) => {
  if (!days.length) {
    return null;
  }

  return (
    <tr>
      {days.map((day, index) => (
        <CalendarBodyDay
          key={`day-${index}`}
          date={day}
          currentMonth={currentMonth}
          entries={entries}
        />
      ))}
    </tr>
  );
};

const CalendarBody = ({ date, start = 0, extended = false, entries = [] }) => {
  const days = getMonthDays(date, start);
  const currentMonth = getMonth(date);
  const weeks = [];

  const bodyClasses = classnames({
    'calendar--extended': extended,
  });

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <tbody className={bodyClasses}>
      {weeks.map((week, index) => (
        <CalendarBodyWeek
          key={`week-${index}`}
          days={week}
          currentMonth={currentMonth}
          entries={entries}
        />
      ))}
    </tbody>
  );
};

export default CalendarBody;
