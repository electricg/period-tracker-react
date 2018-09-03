import React, { Component } from 'react';

import SettingsStartDayOfWeek from '../components/settings/start-day-of-week';
import SettingsShowExtendedMonth from '../components/settings/show-extended-month';

class PageSettings extends Component {
  render() {
    return (
      <div>
        settings
        <SettingsStartDayOfWeek />
        <SettingsShowExtendedMonth />
      </div>
    );
  }
}

export default PageSettings;
