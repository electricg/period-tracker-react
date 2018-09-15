import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Local Reducers
import settings from './state/settings/reducer';
import entries from './state/entries/reducer';
import { loadState, saveState } from './lib/localStorage';

const { NODE_ENV } = process.env;

const reducers = {
  settings,
  entries,
};

export const initStore = () => {
  const reducer = combineReducers(reducers);

  const composeEnhancers =
    NODE_ENV === 'development' ? composeWithDevTools : compose;

  const persistedState = loadState();

  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};
