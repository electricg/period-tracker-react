import React from 'react';
import { connect } from 'react-redux';

import CalendarNav from './nav';
import CalendarWeekday from './week';
import CalendarBody from './body';
import { newDate } from '../../lib/utils';

const Calendar = ({
  current = '',
  startDayOfWeek = 0,
  showExtendedMonth = false,
  entries = [],
}) => {
  const date = newDate(current ? `${current}-01` : '');

  return (
    <table className="calendar">
      <thead>
        <CalendarNav date={date} />
        <CalendarWeekday start={startDayOfWeek} />
      </thead>
      <CalendarBody
        date={date}
        start={startDayOfWeek}
        extended={showExtendedMonth}
        entries={entries}
      />
    </table>
  );
};

const mapStateToProps = ({
  settings: { startDayOfWeek, showExtendedMonth } = {},
  entries = [],
}) => ({
  startDayOfWeek,
  showExtendedMonth,
  entries,
});

export default connect(mapStateToProps)(Calendar);
