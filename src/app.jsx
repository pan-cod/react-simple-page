import React from 'react';
import { hot } from 'react-hot-loader';
import style from './styles/app.scss';

const App = () => (
  <div className={style.oWrapper}>
    {/* <Header />
    <Main />
    <Footer /> */}
  </div>
);

export default hot(module)(App);
