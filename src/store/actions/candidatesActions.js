import { SET_CANDIDATES, SET_SELECTED_PAGE, SET_CHOICE_WITH_PHOTO } from './actionTypes';

import { getCandidates } from '../../utils/utils';

export const setCandidates = (selectedPage, withPhotos) => (dispatch) => {
  getCandidates(selectedPage, withPhotos)
    .then(({ data }) => {
      dispatch({
        type: SET_CANDIDATES,
        payload: data,
      });
    });
};

export const setSelectedPage = data => ({
  type: SET_SELECTED_PAGE,
  payload: data,
});

export const setChoiceWithPhoto = data => ({
  type: SET_CHOICE_WITH_PHOTO,
  payload: data,
});
