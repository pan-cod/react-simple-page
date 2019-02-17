import React from 'react';
import style from '../styles/app.scss';

const Footer = () => (
  <footer className={style.cFooter}>
    <p className={style.cFooter__copy}>
      &copy; {new Date().getFullYear()} mountain kingdom
    </p>
    <div>
      <a className={style.cFooter__link} href="#cookies">
        Cookies
      </a>
      <span className={style.cFooter__separator}>|</span>
      <a className={style.cFooter__link} href="#policy">
        Privacy
      </a>
    </div>
    <p className={style.cFooter__desiner}>
      Design by <span className={style.cFooter__desinerName}>Wizard of Oz</span>
    </p>
  </footer>
);

export default Footer;
