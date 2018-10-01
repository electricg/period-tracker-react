import React from 'react';
import { connect } from 'react-redux';

import CalendarNav from './nav';
import CalendarWeekday from './week';
import CalendarBody from './body';
import { newDate } from '../../lib/utils';
import { getEntriesOriginal } from '../../state/entries/selectors';
import {
  getSettingsStartDayOfWeek,
  getSettingsShowExtendedMonth,
} from '../../state/settings/selectors';

const Calendar = ({
  current = '',
  startDayOfWeek = 0,
  showExtendedMonth = false,
  original = [],
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
        entries={original}
      />
    </table>
  );
};

const mapStateToProps = state => ({
  startDayOfWeek: getSettingsStartDayOfWeek(state),
  showExtendedMonth: getSettingsShowExtendedMonth(state),
  original: getEntriesOriginal(state),
});

export default connect(mapStateToProps)(Calendar);
