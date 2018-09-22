import { ENTRIES_ADD, ENTRIES_REMOVE } from './constants';

export const addEntry = value => {
  return dispatch => {
    dispatch({
      type: ENTRIES_ADD,
      data: { value },
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
