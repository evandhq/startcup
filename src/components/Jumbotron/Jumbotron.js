import React, { Component } from 'react';
import styles from './Jumbotron.scss';

export default class Jumbotron extends Component {
  render() {
    return (<header className={styles.wrapper}>
      <h1>۴۰ دقیقه بدون اینترنت</h1>
      <h2>جام فوتبال سالنی بین استارتاپ‌ها</h2>
    </header>);
  }
}
