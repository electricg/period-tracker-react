import { ENTRIES_ADD, ENTRIES_REMOVE } from './constants';
import { calcDatesCovered } from '../../lib/utils';

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
      const { value, length } = data;
      const newOriginal = [...original, value];
      newOriginal.sort();
      const newPast = calcDatesCovered(newOriginal, length);

      return {
        ...state,
        original: newOriginal,
        past: newPast,
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
