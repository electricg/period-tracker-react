import { ENTRIES_ADD, ENTRIES_REMOVE } from './constants';

const defaultState = [];

export default (state = defaultState, action) => {
  const { type, data } = action;

  switch (type) {
    case ENTRIES_ADD: {
      const { value } = data;
      const newEntries = [...state, value];
      newEntries.sort();
      return newEntries;
    }
    case ENTRIES_REMOVE: {
      const { value } = data;
      const index = state.indexOf(value);

      if (index === -1) {
        return state;
      }

      const newEntries = [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length),
      ];
      return newEntries;
    }
    default:
      return state;
  }
};
