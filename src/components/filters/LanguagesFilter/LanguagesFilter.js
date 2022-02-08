import React, { useState } from "react";
import { ReactComponent as EnglishFlagIcon } from "../../../assets/img/united-kingdom.svg";
import { ReactComponent as RussiaFlagIcon } from "../../../assets/img/russia.svg";
import { ReactComponent as UkraineFlagIcon } from "../../../assets/img/ukraine.svg";
import { ReactComponent as GermanyFlagIcon } from "../../../assets/img/germany.svg";
import { ReactComponent as PolandFlagIcon } from "../../../assets/img/poland.svg";
import { ReactComponent as SpainFlagIcon } from "../../../assets/img/Flag_of_Spain_(Civil).svg";

import "./LanguagesFilter.scss";

export const LanguagesFilter = () => {
  const [ isShowMenu, setIsShowMenu ] = useState('');

  const handleClick = ({target}) => {
    setIsShowMenu(target.name);
  };

  return (
    <div className="languagesFilterContainer">
      <span className="title">Владение языками</span>
      <div className="line"></div>
      <form action="#">
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>
                <EnglishFlagIcon className="flag" />
                Английский
              </span>
            </label>
          </p>
          <span className="wraper">
            <span>603</span>
            {isShowMenu === "english"
            ? (<button
                  type="button"
                  name="noName"
                  className="button"
                  onClick={handleClick}
                >
                  &lsaquo;
                </button>)
            : (<button
                type="button"
                name="english"
                className="button"
                onClick={handleClick}
              >
                &rsaquo;
              </button>)
            }
          </span>
        </div>
        <div className={isShowMenu === "english" ? "menuShow" : "menuHiden"}>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А1) – начальный</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А2) – ниже среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В1) – средний</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В2) – выше среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C1) – продвинутый</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C2) – профессиональный уровень владения</span>
              </label>
            </p>
            <span>73</span>
          </div>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>
                <RussiaFlagIcon className="flag" />
                Русский
              </span>
            </label>
          </p>
          <span className="wraper">
            <span>603</span>
            {isShowMenu === "russia"
            ? (<button
                  type="button"
                  name="noName"
                  className="button"
                  onClick={handleClick}
                >
                  &lsaquo;
                </button>)
            : (<button
                type="button"
                name="russia"
                className="button"
                onClick={handleClick}
              >
                &rsaquo;
              </button>)
            }
          </span>
        </div>
        <div className={isShowMenu === "russia" ? "menuShow" : "menuHiden"}>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А1) – начальный</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А2) – ниже среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В1) – средний</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В2) – выше среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C1) – продвинутый</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C2) – профессиональный уровень владения</span>
              </label>
            </p>
            <span>73</span>
          </div>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>
                <UkraineFlagIcon className="flag" />
                Украинский
              </span>
            </label>
          </p>
          <span className="wraper">
            <span>603</span>
            {isShowMenu === "ukraine"
            ? (<button
                  type="button"
                  name="noName"
                  className="button"
                  onClick={handleClick}
                >
                  &lsaquo;
                </button>)
            : (<button
                type="button"
                name="ukraine"
                className="button"
                onClick={handleClick}
              >
                &rsaquo;
              </button>)
            }
          </span>
        </div>
        <div className={isShowMenu === "ukraine" ? "menuShow" : "menuHiden"}>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А1) – начальный</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А2) – ниже среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В1) – средний</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В2) – выше среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C1) – продвинутый</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C2) – профессиональный уровень владения</span>
              </label>
            </p>
            <span>73</span>
          </div>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>
                <GermanyFlagIcon className="flag" />
                Немецкий
              </span>
            </label>
          </p>
          <span className="wraper">
            <span>603</span>
            {isShowMenu === "germany"
            ? (<button
                  type="button"
                  name="noName"
                  className="button"
                  onClick={handleClick}
                >
                  &lsaquo;
                </button>)
            : (<button
                type="button"
                name="germany"
                className="button"
                onClick={handleClick}
              >
                &rsaquo;
              </button>)
            }
          </span>
        </div>
        <div className={isShowMenu === "germany" ? "menuShow" : "menuHiden"}>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А1) – начальный</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А2) – ниже среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В1) – средний</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В2) – выше среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C1) – продвинутый</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C2) – профессиональный уровень владения</span>
              </label>
            </p>
            <span>73</span>
          </div>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>
                <PolandFlagIcon className="flag" />
                Польский
              </span>
            </label>
          </p>
          <span className="wraper">
            <span>603</span>
            {isShowMenu === "poland"
            ? (<button
                  type="button"
                  name="noName"
                  className="button"
                  onClick={handleClick}
                >
                  &lsaquo;
                </button>)
            : (<button
                type="button"
                name="poland"
                className="button"
                onClick={handleClick}
              >
                &rsaquo;
              </button>)
            }
          </span>
        </div>
        <div className={isShowMenu === "poland" ? "menuShow" : "menuHiden"}>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А1) – начальный</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А2) – ниже среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В1) – средний</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В2) – выше среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C1) – продвинутый</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C2) – профессиональный уровень владения</span>
              </label>
            </p>
            <span>73</span>
          </div>
        </div>
        <div className="checkboxWraper">
          <p>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>
                <SpainFlagIcon className="flag" />
                Испанский
              </span>
            </label>
          </p>
          <span className="wraper">
            <span>603</span>
            {isShowMenu === "spain"
            ? (<button
                  type="button"
                  name="noName"
                  className="button"
                  onClick={handleClick}
                >
                  &lsaquo;
                </button>)
            : (<button
                type="button"
                name="spain"
                className="button"
                onClick={handleClick}
              >
                &rsaquo;
              </button>)
            }
          </span>
        </div>
        <div className={isShowMenu === "spain" ? "menuShow" : "menuHiden"}>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А1) – начальный</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(А2) – ниже среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В1) – средний</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(В2) – выше среднего</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C1) – продвинутый</span>
              </label>
            </p>
            <span>73</span>
          </div>
          <div className="radioWraper">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>(C2) – профессиональный уровень владения</span>
              </label>
            </p>
            <span>73</span>
          </div>
        </div>
      </form>
    </div>
  );
};
