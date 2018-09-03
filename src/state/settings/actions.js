import {
  SETTINGS_SET_startDayOfWeek,
  SETTINGS_SET_showExtendedMonth,
  SETTINGS_SET_periodLength,
  SETTINGS_SET_cycleLength,
} from './constants';

export const settingsSetStartDayOfWeek = checked => {
  return dispatch => {
    const value = checked ? 1 : 0;

    dispatch({
      type: SETTINGS_SET_startDayOfWeek,
      data: { value },
    });
  };
};

export const settingsSetShowExtendedMonth = checked => {
  return dispatch => {
    const value = checked ? true : false;

    dispatch({
      type: SETTINGS_SET_showExtendedMonth,
      data: { value },
    });
  };
};

export const settingsSetPeriodLength = input => {
  return dispatch => {
    const parsed = parseInt(input, 10);
    const value = parsed < 1 ? 1 : parsed;

    dispatch({
      type: SETTINGS_SET_periodLength,
      data: { value },
    });
  };
};

export const settingsSetCycleLength = input => {
  return dispatch => {
    const parsed = parseInt(input, 10);
    const value = parsed < 1 ? 1 : parsed;

    dispatch({
      type: SETTINGS_SET_cycleLength,
      data: { value },
    });
  };
};
