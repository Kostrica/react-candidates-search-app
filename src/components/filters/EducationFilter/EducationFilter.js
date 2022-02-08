import React from "react";

import "./EducationFilter.scss";

export const EducationFilter = () => {
  return (
    <div className="educationFilterContainer">
      <span className="title">Образование</span>
      <div className="line"></div>
      <form action="#">
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Высшее</span>
            </label>
          </p>
          <span>34567</span>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Неоконченное высшее</span>
            </label>
          </p>
          <span>876</span>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Средне-специальное</span>
            </label>
          </p>
          <span>1234</span>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Среднее</span>
            </label>
          </p>
          <span>8764</span>
        </div>
      </form>
    </div>
  );
};
