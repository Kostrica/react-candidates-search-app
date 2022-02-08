import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Vacances } from '../Vacances/Vacances';
import { Sidebar } from '../Sidebar/Sidebar';
import { ReactComponent as FilterIcon } from "../../assets/img/filter-options-preferences-settings-svgrepo-com.svg";
import { ReactComponent as CloseIcon } from "../../assets/img/close-svgrepo-com.svg";

import styles from "./Main.module.scss";

import { setShowFilters } from "../../store/actions/showFiltersActions";

export const Main = () => {
  const dispatch = useDispatch();

  const { totalCandidates } = useSelector(({ candidates }) => candidates);
  const { showFilters } = useSelector(({ showFilters }) => showFilters);

  const getShowFilters = () => {
    dispatch(setShowFilters(!showFilters));
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Мы подобрали <span className={styles.number}>{totalCandidates}</span> резюме</h1>
      <div className={styles.line}></div>
      <div className={styles.searchInfoBox}>
        <span className={styles.searchComment}>Резюме продавец консультант во Всей Украине</span>
        <span className={styles.periodSelectionBox}>
          <select className={styles.periodSelection}>
            <option value="all" className={styles.option}>за все время</option>
            <option value="moon" className={styles.option}>за месяц</option>
            <option value="week" className={styles.option}>за неделю</option>
            <option value="day" className={styles.option}>за день</option>
          </select>
          {showFilters
          ? <CloseIcon
              className={styles.closeIcon}
              onClick={getShowFilters}
            />
          : <FilterIcon
              className={styles.filterIcon}
              onClick={getShowFilters}
            />
          }
        </span>
      </div>
      <div className={styles.mainContainer}>
        <Vacances />
        <Sidebar />
      </div>
    </main>
  );
};
