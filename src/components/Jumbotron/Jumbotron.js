import React, { Component } from 'react';
import styles from './Jumbotron.scss';

export default class Jumbotron extends Component {
  render() {
    return (<header className={styles.wrapper}>
      <h1>جام فوتبال بین استارتاپ‌ها</h1>
      <h2>کد می‌زنی، کار می‌کنی، یه ذره هم تفریح و رقابت کن!</h2>
    </header>);
  }
}
