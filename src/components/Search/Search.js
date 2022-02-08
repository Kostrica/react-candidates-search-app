import React, { useState } from "react";
import { ReactComponent as SearhIcon } from "../../assets/img/search-svgrepo-com.svg";
import { ReactComponent as LocationIcon } from "../../assets/img/location-point-svgrepo-com.svg";

import styles from "./Search.module.scss";

export const Search = () => {
  const [ position, setPosition ] = useState('');
  const [ city, setCity ] = useState('');

  const handleChange = ({ name, value }) => {
    if (name === 'position') {
      setPosition(value);
    }

    if (name === 'city') {
      setCity(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setPosition('');
    setCity('');
  }

  return (
    <div className={styles.searh}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <span>
          <SearhIcon className={styles.searhIcon} />
          <input
            className={styles.position}
            name="position"
            placeholder="На какую должность вы ищете кандидата?"
            value={position}
            onChange={({ target }) => handleChange(target)}
          />
          <input
            className={styles.positionMini}
            name="position"
            placeholder="Поиск"
            value={position}
            onChange={({ target }) => handleChange(target)}
          />
        </span>
        <span className={styles.cityContainer}>
          <LocationIcon className={styles.locationIcon}/>
          <input
            className={styles.city}
            name="city"
            placeholder="Город"
            value={city}
            onChange={({ target }) => handleChange(target)}
          />
        </span>
        <button type="submit" className={styles.button}>Найти кандидатов</button>
      </form>
    </div>
  );
};
