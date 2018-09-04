import { ENTRIES_ADD } from './constants';

export const addEntry = value => {
  return dispatch => {
    dispatch({
      type: ENTRIES_ADD,
      data: { value },
    });
  };
};
