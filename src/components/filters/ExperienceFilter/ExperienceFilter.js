import React from "react";
import { ReactComponent as StudentIcon } from "../../../assets/img/student-bold-svgrepo-com.svg";

import "./ExperienceFilter.scss";

export const ExperienceFilter = () => {
  return (
    <div className="experienceFilterContainer">
      <span className="title">Опыт работы</span>
      <div className="line"></div>
      <form action="#">
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Без опыта</span>
            </label>
          </p>
          <span>603</span>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>До 1 года</span>
            </label>
          </p>
          <span>603</span>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>От 1 до 2 лет</span>
            </label>
          </p>
          <span>603</span>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>От 2 до 5 лет</span>
            </label>
          </p>
          <span>603</span>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>От 1 до 10 лет</span>
            </label>
          </p>
          <span>603</span>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Более 10 лет</span>
            </label>
          </p>
          <span>603</span>
        </div>
      </form>
      <div className="switchBox">
        <div>
          <StudentIcon />
          <span className="text">Только студенты</span>
        </div>
        <div className="switch">
          <label>
            <input type="checkbox" />
            <span className="lever"></span>
          </label>
        </div>
      </div>
    </div>
  );
};
