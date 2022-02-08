import React, { useState } from "react";
import { ReactComponent as LocationIcon } from "../../assets/img/location-point-svgrepo-black-com.svg";
import { ReactComponent as HeartIcon } from "../../assets/img/heart-svgrepo-com.svg";
import { ReactComponent as HeartActiveIcon } from "../../assets/img/heart-svgrepo-active-com.svg";
import { ReactComponent as MenuVerticalIcon } from "../../assets/img/menu-vertical-svgrepo-com.svg";

import moment from 'moment';

import styles from "./Candidate.module.scss";

export const Candidate = ({ candidate }) => {
  const {
    photo,
    desiredposition,
    first_name,
    birthday,
    workexperience,
    updated_at,
    status,
    work_city
  } = candidate;

  const getStringValue = (number, value) => {
    const arrNum = number.toString().split('');
    const lastNum = +arrNum[arrNum.length - 1];
    const penultimateNum = +arrNum[arrNum.length - 2];
    const lastTwoNum = +[penultimateNum, lastNum].join('');
    let stringValue = '';

    if (lastNum === 0 || lastNum >= 5 || (lastTwoNum >= 11 && lastTwoNum <= 19)) {
      switch (value) {
        case 'year':
          stringValue = 'лет';
          break;
        case 'day':
          stringValue = 'дней';
          break;
        default:
          stringValue = '';
      };
    } else if (lastNum === 1) {
      switch (value) {
        case 'year':
          stringValue = 'год';
          break;
        case 'day':
          stringValue = 'день';
          break;
        default:
          stringValue = '';
      };
    } else if (lastNum >= 2 && lastNum <= 4) {
      switch (value) {
        case 'year':
          stringValue = 'года';
          break;
        case 'day':
          stringValue = 'дня';
          break;
        default:
          stringValue = '';
      };
    }

    return stringValue;
  };

  const getTheTimeDifference = (dateStart, dateEnd) => {
    const getArrDate = (date) => {
      const arrDate = date.split('-');
      return [+arrDate[0], arrDate[1] - 1, arrDate[2]];
    };

    const newDateStart = moment(getArrDate(dateStart));
    let newDateEnd;

    if (dateEnd) {
      newDateEnd = moment(getArrDate(dateEnd));
    } else {
      newDateEnd = moment();
    }

    const years = newDateEnd.diff(newDateStart, 'years');
    const months = newDateEnd.diff(newDateStart, 'months');
    const days = newDateEnd.diff(newDateStart, 'days');
    const hours = newDateEnd.diff(newDateStart, 'hours');
    const minutes = newDateEnd.diff(newDateStart, 'minutes');

    const timeDifference = { years, months, days, hours, minutes };

    return timeDifference;
  };

  let ageCandidate;

  if (birthday) {
    ageCandidate = getTheTimeDifference(birthday).years;
  }

  const updatedDays = getTheTimeDifference(updated_at).days;
  const updatedHours = getTheTimeDifference(updated_at).hours;
  const updatedMinutes = getTheTimeDifference(updated_at).minutes;
  const otherUpdatedHours = updatedHours - (updatedDays * 24);
  const otherUpdatedMinutes = updatedMinutes - (updatedHours * 60);

  const [ menuVisibal, setMenuVisibal ] = useState(false);
  const [ isLike, setIsLike ] = useState(false);

  const showMenu = () => {
    setMenuVisibal(prevState => !prevState);
  }

  const handleLike = () => {
    setIsLike(prevState => !prevState);
  }

  return (
    <div className={styles.candidate}>
      <div className={styles.infoBox}>
        {photo
        ? <img src={photo} alt="Avatar" className={styles.photo} />
        : <div className={styles.photo} />
        }
        <div className={styles.info}>
          <h2 className={styles.position}>
            {desiredposition[0].position.split(', ')[0]}
          </h2>
          <div className={styles.nameBox}>
            <span className={styles.name}>
              {first_name ? first_name : 'Без имени'}, {ageCandidate ? `${ageCandidate} ${getStringValue(ageCandidate, 'year')}`: 'Без возроста'}
            </span>
            <span className={styles.locationBox}>
              <LocationIcon className={styles.locationIcon}/>
              <span className={styles.city}>
                {work_city[0]
                ? work_city[0].display_name.split(', ').slice(0, 2).join(', ')
                : 'Без города'
                }
              </span>
            </span>
          </div>
          <ul className={styles.experience}>
            {workexperience[0]
            ? workexperience.map(({
                id,
                company_name,
                position,
                date_from,
                date_to
              }) => {
              const years = getTheTimeDifference(date_from, date_to).years;
              const months = getTheTimeDifference(date_from, date_to).months;
              const otherMonths = months - (years * 12);

              return (
                <li
                  key={id}
                  className={styles.experienceItem}
                >
                  {position} в {company_name} - {years !==0 && `${years} ${getStringValue(years, 'year')}`} {otherMonths !==0 && `${otherMonths} мес.`} 
                </li>
            )})
            : <li
                key='withoutExperience'
                className={styles.experienceItem}
              >
                Без опыта
              </li>
            }
          </ul>
          <div>
            <span className={styles.updateDeadline}>
              Обновлено {
                updatedDays !== 0 
                ? `${updatedDays} ${getStringValue(updatedDays, 'day')}`
                : otherUpdatedHours !== 0
                  ? `${otherUpdatedHours} час. ${otherUpdatedMinutes} мин.`
                  : `${otherUpdatedMinutes} мин.`} назад
            </span>
            <span className={styles.statusBox}>
              {status
              ? <span className={styles.statusOn}>
                  <span className={styles.markerOn}></span>
                  Онлайн
                </span>
              : <span className={styles.statusOff}>
                  <span className={styles.markerOff}></span>
                  Оффлайн
                </span>
              }
            </span>
          </div>
        </div>
      </div>
      <div className={styles.controlBox}>
        {isLike
        ? <HeartActiveIcon
          type="button"
          className={styles.button}
          onClick={handleLike}
        />
        : <HeartIcon
          type="button"
          className={styles.button}
          onClick={handleLike}
        />
        }
        <MenuVerticalIcon
          type="button"
          className={styles.button}
          onClick={showMenu}
        />
        {menuVisibal && 
          <div className={styles.menu}>
            <button
              type="button"
              className={styles.menuButton}
            >
              Пожаловаться
            </button>
            <button
              type="button"
              className={styles.menuButton}
            >
              Скрыть кандидата
            </button>
          </div>
        }
      </div>
    </div>
  );
};
