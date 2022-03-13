import { combineReducers } from '@reduxjs/toolkit';
import drawer from './DrawerSlice';
import theme from './ThemeSlice';
import list from './ListSlice';
const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    drawer,
    list,
  });

  return combinedReducer(state, action);
};

export default createReducer;
