import React from 'react';
import style from '../styles/app.scss';

const Footer = () => (
  <footer className={style.cFooter}>
    <p>&copy; {new Date().getFullYear()} mountain kingdom </p>
    <div>
      <a href="#cookies">Cookies</a>
      <span>|</span>
      <a href="#policy">Privacy</a>
    </div>
    <p>Design by Wizard of Oz</p>
  </footer>
);

export default Footer;
