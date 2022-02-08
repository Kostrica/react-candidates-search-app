import React from "react";
import { useSelector } from "react-redux";
import { AgeFilter } from "../filters/AgeFilter/AgeFilter";
import { EducationFilter } from "../filters/EducationFilter/EducationFilter";
import { EmploymentTypeFilter } from "../filters/EmploymentTypeFilter/EmploymentTypeFilter";
import { ExperienceFilter } from "../filters/ExperienceFilter/ExperienceFilter";
import { LanguagesFilter } from "../filters/LanguagesFilter/LanguagesFilter";
import { PhotoFilter } from "../filters/PhotoFilter/PhotoFilter";
import { SalaryFilter } from "../filters/SalaryFilter/SalaryFilter";
import { SexFilter } from "../filters/SexFilter/SexFilter";

import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const { showFilters } = useSelector(({ showFilters }) => showFilters);

  return (
    <div
      className={showFilters ? styles.sidebarBoxShow : styles.sidebarBoxHiden}
    >
      <div className={styles.sidebar}>
        <h2 className={styles.title}>Фильтры</h2>
        <PhotoFilter />
        <AgeFilter />
        <SexFilter />
        <SalaryFilter />
        <ExperienceFilter />
        <LanguagesFilter />
        <EmploymentTypeFilter />
        <EducationFilter />
      </div>
    </div>
  );
};
