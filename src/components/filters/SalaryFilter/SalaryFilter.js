import React, { useState } from "react";
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import "./SalaryFilter.scss";

const initialRangeValue = {
  minValue: 1000,
  maxValue: 10000,
};

export const SalaryFilter = () => {
  const [ rangeValue, setRangeValue ] = useState(initialRangeValue);
  const { minValue, maxValue } = rangeValue;

  const handleRange = (value) => {
    setRangeValue({
      minValue: value[0],
      maxValue: value[1],
    })
  };

  return (
    <div className="salaryFilterContainer">
      <span className="title">Желаемая зарплата</span>
      <div className="line"></div>
      <div className="rangeBox">
        <Range
          min={0}
          max={25000}
          defaultValue={[minValue, maxValue]}
          step={1000}
          onChange={handleRange}
          railStyle={{height: '1px', backgroundColor: '#EAEAEA'}}
          trackStyle={[{height: '1px', backgroundColor: '#000046'}]}
          dotStyle={{height: '15px', width: '15px', backgroundColor: '#000046'}}
        />
      </div>
      <div className="displayAge">
        от
        <span className="display">{minValue}</span>
        до
        <span className="display">{maxValue}</span>
        грн
      </div>
      <div className="switchBox">
        <span className="text">Не показывать без зарплаты</span>
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
