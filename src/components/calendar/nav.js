import React from 'react';
import { Link } from 'react-router-dom';
import DateFnsFormat from 'date-fns/format';

import Icon from '../icon';

import { getNextMonth, getPrevMonth } from '../../lib/utils';

export const CalendarNavMonth = ({ date, dir }) => {
  const dirAction = dir === 'next' ? getNextMonth : getPrevMonth;
  const newDate = dirAction(date);
  const formattedName = DateFnsFormat(newDate, 'MMMM YYYY');
  const formattedLink = DateFnsFormat(newDate, 'YYYY-MM');
  const icon = dir;

  return (
    <th>
      <Link to={formattedLink} className="calendar__nav" title={formattedName}>
        <Icon id={icon} cssModifier="calendar-nav" />
      </Link>
    </th>
  );
};

export const CalendarNavCurrent = ({ date }) => {
  const current = DateFnsFormat(date, 'MMM YYYY');

  return <th colSpan="5">{current}</th>;
};

const CalendarNav = ({ date }) => {
  return (
    <tr>
      <CalendarNavMonth date={date} dir="prev" />
      <CalendarNavCurrent date={date} />
      <CalendarNavMonth date={date} dir="next" />
    </tr>
  );
};

export default CalendarNav;
