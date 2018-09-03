import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Local Reducers
import settings from './state/settings/reducer';

const { NODE_ENV } = process.env;

const reducers = {
  settings,
};

/**
 * We create a store stub here for the browser rendering. If rendered in a browser,
 * the store is held in memory. If rendered on the server, it is returned new each
 * each time.
 */
let store = null;
export const initStore = (initialState = {}) => {
  const reducer = combineReducers(reducers);

  if (typeof window === 'undefined') {
    store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
    return store;
  }

  const composeEnhancers =
    NODE_ENV === 'development' ? composeWithDevTools : compose;
  if (!store) {
    store = createStore(
      reducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    );
    // set window.store for production debugging purposes
    window.store = store;
  }

  return store;
};
