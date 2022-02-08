import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as PhotoIcon } from "../../../assets/img/photo-2-svgrepo-com.svg";
import { setChoiceWithPhoto, setSelectedPage } from "../../../store/actions/candidatesActions";

import "./PhotoFilter.scss";

export const PhotoFilter = () => {
  const dispatch = useDispatch();
  const [ withPhoto, setWithPhoto ] = useState(false);

  const handleChange = () => {
    setWithPhoto(prevState => !prevState);
  }

  useEffect(() => {
    dispatch(setChoiceWithPhoto(withPhoto));
    dispatch(setSelectedPage(1));
  }, [dispatch, withPhoto]);

  return (
    <div className="photoFilterContainer">
      <div>
        <PhotoIcon />
        <span className="text">Только с фотографией</span>
      </div>
      <div className="switch">
        <label>
          <input
            type="checkbox"
            checked={withPhoto}
            onChange={handleChange}
          />
          <span className="lever"></span>
        </label>
      </div>
    </div>
  );
};
