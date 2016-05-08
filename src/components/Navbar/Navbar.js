import React, { Component } from 'react';
import styles from './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (<header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={require('images/logo-navbar.png')} alt="Startcup"/>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#register">ثبت نام در جام</a></li>
            <li><a href="#about">یکی منو توجیه کنه</a></li>
          </ul>
        </nav>
      </div>
    </header>);
  }
}
