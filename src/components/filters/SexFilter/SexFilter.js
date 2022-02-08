import React, { useState } from "react";

import styles from "./SexFilter.module.scss";

export const SexFilter = () => {
  const [ isActive, setIsActive ] = useState('');

  const handleClick = ({ target }) => {
    setIsActive(target.name);
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Пол</span>
      <div className={styles.line}></div>
      <div className={styles.rangeBox}>
        <button
          type="button"
          name="all"
          className={isActive === 'all' ? styles.activeButton : styles.button}
          onClick={handleClick}
        >
          Любой
        </button>
        <button
          type="button"
          name="man"
          className={isActive === 'man' ? styles.activeButton : styles.button}
          onClick={handleClick}
        >
          Женщины
        </button>
        <button
          type="button"
          name="woman"
          className={isActive === 'woman' ? styles.activeButton : styles.button}
          onClick={handleClick}
        >
          Мужчины
        </button>
      </div>
    </div>
  );
};
