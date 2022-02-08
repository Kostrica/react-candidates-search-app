import { SET_SHOW_FILTERS } from '../actions/actionTypes';

const initialState = {
  showFilters: false,
};

export const showFiltersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SHOW_FILTERS:
      return {
        ...state,
        showFilters: payload,
      };

    default:
      return state;
  }
};
