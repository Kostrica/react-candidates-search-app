import { combineReducers } from 'redux';
import { candidatesReducer } from './reducers/candidatesReducer';
import { showFiltersReducer } from './reducers/showFiltersReducer';

export const rootReducer = combineReducers({
  candidates: candidatesReducer,
  showFilters: showFiltersReducer,
});
