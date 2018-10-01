import { ENTRIES_ADD, ENTRIES_REMOVE } from './constants';

const defaultState = {
  original: [],
  past: [],
  future: [],
};

export default (state = defaultState, action) => {
  const { type, data } = action;

  switch (type) {
    case ENTRIES_ADD: {
      const { original } = state;
      const { value } = data;
      const newOriginal = [...original, value];
      newOriginal.sort();
      return {
        ...state,
        original: newOriginal,
      };
    }
    case ENTRIES_REMOVE: {
      const { original } = state;
      const { value } = data;
      const index = original.indexOf(value);

      if (index === -1) {
        return state;
      }

      const newOriginal = [
        ...original.slice(0, index),
        ...original.slice(index + 1, original.length),
      ];
      return {
        ...state,
        original: newOriginal,
      };
    }
    default:
      return state;
  }
};
