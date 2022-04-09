import React from 'react';
// @ts-ignore
import styles from './footer.module.scss';
import {
  Facebook,
  Instagram,
  LocalPhone,
  MailOutline,
  Message,
  PhoneCallback,
  PhoneInTalk,
  Telegram, YouTube
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.contactsBlock}>
          <div>
            <LocalPhone className={styles.icons}/>
            <span>+375 29 302 10 21</span>
          </div>
          <div>
            <PhoneInTalk className={styles.icons} />
            <span>+375 25 502 10 21</span>
          </div>
          <div>
            <PhoneCallback className={styles.icons} />
            <span>+375 17 302 10 21</span>
          </div>
          <div>
            <Telegram className={styles.icons} />
            <span>Telegram</span>
          </div>
          <div>
            <MailOutline className={styles.icons} />
            <span>Почта</span>
          </div>
          <div>
            <Message className={styles.icons} />
            <span>Написать нам</span>
          </div>
        </div>

        <div className={styles.socialMediaBlock}>
          <a href="https://www.facebook.com/21vek.by/" target="_blank"><Facebook /></a>
          <a href="https://www.instagram.com/21vek.by/" target="_blank"><Instagram /></a>
          <a href="https://www.youtube.com/channel/UChNfLMJmxWcaMy1oPxxSvog" target="_blank"><YouTube /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;