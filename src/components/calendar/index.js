import React from 'react';
import { connect } from 'react-redux';

import CalendarNav from './nav';
import CalendarWeekday from './week';
import { newDate } from '../../lib/utils';

const Calendar = ({
  current = '',
  startDayOfWeek = 0,
  showExtendedMonth = false,
}) => {
  const date = newDate(current ? `${current}-01` : '');
  const month = date.getMonth();
  const year = date.getFullYear();

  console.log(month, year);

  return (
    <div>
      calendar
      <table className="calendar">
        <thead>
          <CalendarNav date={date} />
          <CalendarWeekday start={startDayOfWeek} />
        </thead>
      </table>
    </div>
  );
};

const mapStateToProps = ({
  settings: { startDayOfWeek, showExtendedMonth } = {},
}) => ({
  startDayOfWeek,
  showExtendedMonth,
});

export default connect(mapStateToProps)(Calendar);
