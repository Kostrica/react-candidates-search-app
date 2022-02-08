import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.scss";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';

import { setCandidates } from "./store/actions/candidatesActions";

function App() {
  const dispatch = useDispatch();
  const { selectedPage, choiceWithPhoto } = useSelector(({ candidates }) => candidates)

  useEffect(() => {
    dispatch(setCandidates(selectedPage, choiceWithPhoto));
  }, [dispatch, selectedPage, choiceWithPhoto]);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
