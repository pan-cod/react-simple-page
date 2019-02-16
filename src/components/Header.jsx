import React from 'react';
import style from '../styles/app.scss';
import peaks from '../assets/img/peaks.png';

const Header = () => (
  <header className={style.cHeader}>
    <nav>
      <ul className={style.cHeader__list}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#offer">Offer</a>
        </li>
        <li>
          <a href="./" rel="home" aria-label="home logo mountains">
            <img className={style.cHeader__logo} src={peaks} alt="peaks logo" />
          </a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
