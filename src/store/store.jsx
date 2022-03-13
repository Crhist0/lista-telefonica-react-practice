import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';

import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';

import listReducer from './ListSlice';
import themeReducer from './ThemeSlice';
import drawerReducer from './DrawerSlice';

const reducers = combineReducers({
  list: listReducer,
  theme: themeReducer,
  drawer: drawerReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk],
});

export default store;
