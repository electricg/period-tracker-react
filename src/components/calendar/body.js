import React from 'react';
import DateFnsFormat from 'date-fns/format';
import classnames from 'classnames';

import { getMonth, getMonthDays } from '../../lib/utils';

export const CalendarBodyDay = ({ date, currentMonth = 0 }) => {
  const day = DateFnsFormat(date, 'D');
  const month = getMonth(date);
  const cellClasses = classnames({
    calendar__day: true,
    'calendar__day--another-month': month !== currentMonth,
  });

  return <td className={cellClasses}>{day}</td>;
};

export const CalendarBodyWeek = ({ days = [], currentMonth = 0 }) => {
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
        />
      ))}
    </tr>
  );
};

const CalendarBody = ({ date, start = 0, extended = false }) => {
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
        />
      ))}
    </tbody>
  );
};

export default CalendarBody;
