const localStorageNamespace = 'period-tracker-react';

/**
 * Load redux state from localStorage
 * @returns {Object}
 */
const loadState = () => {
  try {
    const serializedState = localStorage.getItem(localStorageNamespace);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

/**
 * Save redux state in localStorage
 * @param {Object} state redux state
 * @returns {Boolean} true if saved was successful
 */
const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageNamespace, serializedState);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports.localStorageNamespace = localStorageNamespace;
module.exports.loadState = loadState;
module.exports.saveState = saveState;
