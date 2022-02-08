import React from "react";
import { ReactComponent as TwitterIcon } from "../../assets/img/twitter-svgrepo-com.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/img/linkedin-svgrepo-com.svg";
import { ReactComponent as FacebookIcon } from "../../assets/img/facebook-svgrepo-com.svg";
import { ReactComponent as InstagramIcon } from "../../assets/img/instagram-svgrepo-com.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/img/youtube-svgrepo-com.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/img/whatsapp-whats-app-svgrepo-com.svg";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.menuFooter}>
        <div className={styles.menu}>
          <h3 className={styles.title}>Другое</h3>
          <a href="#" className={styles.link}>Про Нас</a>
          <a href="#" className={styles.link}>Блог</a>
        </div>
        <div className={styles.menu}>
          <h3 className={styles.title}>Сотрудничество с нами</h3>
          <a href="#" className={styles.link}>Реклама на сайте</a>
          <a href="#" className={styles.link}>Партнерская программа</a>
          <a href="#" className={styles.link}>Контакты</a>
        </div>
        <div className={styles.socialNetworks}>
          <TwitterIcon className={styles.icon} />
          <LinkedinIcon className={styles.icon} />
          <FacebookIcon className={styles.icon} />
          <InstagramIcon className={styles.icon} />
          <YoutubeIcon className={styles.icon} />
          <WhatsappIcon className={styles.icon} />
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div>
          <span className={styles.text}>Privacy Policy</span>
          <span className={styles.separator}></span>
          <span className={styles.textRights}>© 2021 All rights reserved</span>
          <span className={styles.separatorSecond}></span>
          <span className={styles.text}>Terms of Use</span>
        </div>
      </div>
    </div>
  );
};
