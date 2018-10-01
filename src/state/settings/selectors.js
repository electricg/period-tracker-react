export const getSettingsStartDayOfWeek = state => {
  const { settings: { startDayOfWeek } = {} } = state;
  return startDayOfWeek;
};

export const getSettingsShowExtendedMonth = state => {
  const { settings: { showExtendedMonth } = {} } = state;
  return showExtendedMonth;
};

export const getSettingsPeriodLength = state => {
  const { settings: { periodLength } = {} } = state;
  return periodLength;
};

export const getSettingsCycleLength = state => {
  const { settings: { cycleLength } = {} } = state;
  return cycleLength;
};
