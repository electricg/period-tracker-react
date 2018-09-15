/**
 * Load redux state from localStorage
 * @returns {Object}
 */
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('period-tracker-react');

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
 */
const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('period-tracker-react', serializedState);
  } catch (error) {
    console.log(error);
  }
};

module.exports.loadState = loadState;
module.exports.saveState = saveState;
