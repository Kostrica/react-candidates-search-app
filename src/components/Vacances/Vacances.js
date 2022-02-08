import React from "react";
import { useSelector } from "react-redux";
import { Candidate } from "../Candidate/Candidate";
import { Pagination } from "../Pagination/Pagination";

import styles from "./Vacances.module.scss";

export const Vacances = () => {
  const { listOfCandidates } = useSelector(({ candidates }) => candidates);
  const { showFilters } = useSelector(({ showFilters }) => showFilters);

  return (
    <div className={!showFilters ? styles.vacancesShow : styles.vacancesHiden}>
      <ul className={styles.collection}>
        {listOfCandidates.map( candidate => (
          <li
            key={candidate.id}
            className={styles.collectionItem}
          >
            <Candidate candidate={candidate} />
          </li>
        ))}
      </ul>
      <Pagination />
    </div>
  );
};
