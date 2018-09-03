import {
  SETTINGS_SET_startDayOfWeek,
  SETTINGS_SET_showExtendedMonth,
  SETTINGS_SET_periodLength,
  SETTINGS_SET_cycleLength,
} from './constants';

const defaultState = {
  startDayOfWeek: 1,
  showExtendedMonth: true,
  periodLength: 4,
  cycleLength: 28,
};

export default (state = defaultState, action) => {
  const { type, data } = action;

  switch (type) {
    case SETTINGS_SET_startDayOfWeek: {
      const { value } = data;
      return {
        ...state,
        startDayOfWeek: value,
      };
    }
    case SETTINGS_SET_showExtendedMonth: {
      const { value } = data;
      return {
        ...state,
        showExtendedMonth: value,
      };
    }
    case SETTINGS_SET_periodLength: {
      const { value } = data;
      return {
        ...state,
        periodLength: value,
      };
    }
    case SETTINGS_SET_cycleLength: {
      const { value } = data;
      return {
        ...state,
        cycleLength: value,
      };
    }
    default:
      return state;
  }
};
