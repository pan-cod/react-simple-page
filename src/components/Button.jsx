import React from 'react';
import style from '../styles/app.scss';

const btnClasses = `${style.cBtn} ${style.cBtn__primary} ${style.cBtn__large}`;

const Button = () => (
  <div>
    <button className={btnClasses} type="button">
      Enter the gates
    </button>
  </div>
);

export default Button;
