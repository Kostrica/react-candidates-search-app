import React from "react";
import { ReactComponent as LanguageIcon } from "../../assets/img/globe-svgrepo-com.svg";

import styles from "./Authentication.module.scss";

export const Authentication = () => {
  return (
    <div className={styles.container}>
      <div className={styles.language}>
        <LanguageIcon />
        <select className={styles.select}>
          <option value="RU" className={styles.option}>RU</option>
          <option value="UA" className={styles.option}>UA</option>
          <option value="EN" className={styles.option}>EN</option>
        </select>
      </div>
      <button className={styles.entranceButton}>Войти</button>
      <button className={styles.applicantButton}>
        Соискателю
        <span className={styles.applicantButtonIcon}>
          &rsaquo;
        </span>
      </button>
    </div>
  );
};
