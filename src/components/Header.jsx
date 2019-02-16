import React from 'react';
import style from '../styles/app.scss';

const Header = () => (
  <header className={style.cHeader}>
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#offer">Offer</a>
        </li>
        <li>
          <a href="./" rel="home" aria-label="logo mountains">
            home
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
