import React, { PureComponent } from 'react';

import Calendar from '../components/calendar';

class PageCalendar extends PureComponent {
  render() {
    const { match = {} } = this.props;
    const { params: { date = '' } = {} } = match;

    return <Calendar current={date} />;
  }
}

export default PageCalendar;
