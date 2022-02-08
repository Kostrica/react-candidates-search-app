import React, { useState } from "react";

import styles from "./Header.module.scss";
import { Authentication } from "../Authentication/Authentication";
import { Search } from "../Search/Search";
import { ReactComponent as UserIcon } from "../../assets/img/user-svgrepo-com.svg";

export const Header = () => {
  const [ isActive, setIsActive ] = useState('employer');

  const handleClick = ({ target }) => {
    setIsActive(target.name);
  };

  return (
    <div className={styles.header}>
      <div className={styles.autContainer}>
        <nav className={styles.navBox}>
          <button
            type="button"
            name="applicant"
            className={isActive === 'applicant' ? styles.activeButton : styles.button}
            onClick={handleClick}
          >
            Соискатель
          </button>
          <span className={styles.separator}>|</span>
          <button
            type="button"
            name="employer"
            className={isActive === 'employer' ? styles.activeButton : styles.button}
            onClick={handleClick}
          >
            Работодатель
          </button>
          <span className={styles.separator}>|</span>
          <button
            type="button"
            name="hr"
            className={isActive === 'hr' ? styles.activeButton : styles.button}
            onClick={handleClick}
          >
            HR
          </button>
        </nav>
        <Authentication />
      </div>
      <div className={styles.userName}>
        <span>
          <UserIcon className={styles.userIcon} />
          Юра Марченко
        </span>
      </div>
      <Search />
    </div>
  );
};
