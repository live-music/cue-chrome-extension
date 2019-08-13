import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

import reducer from './reducers';

const persistConfig = {
  key: 'cue',
  storage,
  stateReconciler: autoMergeLevel2,
  debug: true
};

const persistedReducer = persistCombineReducers(persistConfig, { app: reducer });

function configureStore() {
  const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
  const persistor = persistStore(store);
  // persistor.purge();

  return { store, persistor };
}

const configStore = configureStore();

export const { store, persistor } = configStore;
