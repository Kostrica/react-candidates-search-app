import React from "react";

import "./EmploymentTypeFilter.scss";

export const EmploymentTypeFilter = () => {
  return (
    <div className="employmentTypeFilterContainer">
      <span className="title">Тип занятости</span>
      <div className="line"></div>
      <form action="#">
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Полная занятость</span>
            </label>
          </p>
          <span>34567</span>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Неполная занятость</span>
            </label>
          </p>
          <span>876</span>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Удаленная работа</span>
            </label>
          </p>
          <span>1234</span>
        </div>
      </form>
    </div>
  );
};
