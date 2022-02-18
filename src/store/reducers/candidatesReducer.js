import { SET_CANDIDATES, SET_SELECTED_PAGE, SET_CHOICE_WITH_PHOTO } from '../actions/actionTypes';
import { initialListOfCandidates } from '../initialListOfCandidates';

const initialState = {
  listOfCandidates: initialListOfCandidates,
  totalCandidates: 10,
  pageCount: 1,
  openedPage: 0,
  selectedPage: 1,
  choiceWithPhoto: null,
};

export const candidatesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CANDIDATES:
      return {
        ...state,
        listOfCandidates: payload.results,
        totalCandidates: payload.total_count,
        pageCount: payload.page_count,
        openedPage: payload.current_page - 1,
      };

    case SET_SELECTED_PAGE:
      return {
        ...state,
        selectedPage: payload,
      };

    case SET_CHOICE_WITH_PHOTO:
      return {
        ...state,
        choiceWithPhoto: payload,
      };

    default:
      return state;
  }
};
