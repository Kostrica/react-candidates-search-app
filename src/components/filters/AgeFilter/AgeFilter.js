import React, { useState } from "react";
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import styles from "./AgeFilter.module.scss";

const initialRangeValue = {
  minValue: 20,
  maxValue: 50,
};

export const AgeFilter = () => {
  const [ rangeValue, setRangeValue ] = useState(initialRangeValue);
  const { minValue, maxValue } = rangeValue;

  const handleRange = (value) => {
    setRangeValue({
      minValue: value[0],
      maxValue: value[1],
    })
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Возраст</span>
      <div className={styles.line}></div>
      <div className={styles.rangeBox}>
        <Range
          min={15}
          max={80}
          defaultValue={[minValue, maxValue]}
          step={5}
          onChange={handleRange}
          railStyle={{height: '1px', backgroundColor: '#EAEAEA'}}
          trackStyle={[{height: '1px', backgroundColor: '#000046'}]}
          dotStyle={{height: '15px', width: '15px', backgroundColor: '#000046'}}
        />
      </div>
      <div className={styles.displayAge}>
        от
        <span className={styles.display}>{minValue}</span>
        до
        <span className={styles.display}>{maxValue}</span>
        лет
      </div>
    </div>
  );
};
