import React, { Component } from 'react';

import SettingsStartDayOfWeek from '../components/settings/start-day-of-week';
import SettingsShowExtendedMonth from '../components/settings/show-extended-month';
import SettingsPeriodLength from '../components/settings/period-length';
import SettingsCycleLength from '../components/settings/cycle-length';

class PageSettings extends Component {
  render() {
    return (
      <div>
        settings
        <SettingsStartDayOfWeek />
        <SettingsShowExtendedMonth />
        <SettingsPeriodLength />
        <SettingsCycleLength />
      </div>
    );
  }
}

export default PageSettings;
