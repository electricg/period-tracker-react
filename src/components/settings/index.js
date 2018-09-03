import React, { Fragment } from 'react';

import SettingsStartDayOfWeek from './start-day-of-week';
import SettingsShowExtendedMonth from './show-extended-month';
import SettingsPeriodLength from './period-length';
import SettingsCycleLength from './cycle-length';
import SettingsInfo from './info';

const Settings = () => {
  return (
    <Fragment>
      <SettingsStartDayOfWeek />
      <SettingsShowExtendedMonth />
      <SettingsPeriodLength />
      <SettingsCycleLength />
      <SettingsInfo />
    </Fragment>
  );
};

export default Settings;
