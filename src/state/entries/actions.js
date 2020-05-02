import { ENTRIES_ADD, ENTRIES_REMOVE } from './constants';
import { getSettingsPeriodLength } from '../settings/selectors';

export const addEntry = value => {
  return (dispatch, getState) => {
    const state = getState();
    const periodLength = getSettingsPeriodLength(state);
    const length = periodLength - 1;

    dispatch({
      type: ENTRIES_ADD,
      data: { value, length },
    });
  };
};

export const removeEntry = value => {
  return dispatch => {
    dispatch({
      type: ENTRIES_REMOVE,
      data: { value },
    });
  };
};
