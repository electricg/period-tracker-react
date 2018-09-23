import React from 'react';

import { getWeekdaysNames } from '../../lib/utils';

const CalendarWeekday = ({ start = 0 }) => {
  const days = getWeekdaysNames(start);

  return (
    <tr>
      {days.map(day => (
        <th key={day} className="calendar__weekday">
          {day}
        </th>
      ))}
    </tr>
  );
};

export default CalendarWeekday;
