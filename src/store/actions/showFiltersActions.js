import { SET_SHOW_FILTERS } from '../actions/actionTypes';

export const setShowFilters = data => ({
  type: SET_SHOW_FILTERS,
  payload: data,
});
