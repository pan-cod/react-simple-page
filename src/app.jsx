import React from 'react';
import { hot } from 'react-hot-loader';
import style from './styles/app.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => (
  <div className={style.oWrapper}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default hot(module)(App);
