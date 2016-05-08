import React, { Component } from 'react';
import styles from './Footer.scss';

export default class Footer extends Component {
  render() {
    return (<footer className={styles.wrapper}>
      این جام با همکاری <a href="https://evand.ir">ایوند</a> برگزار می‌شود.
      این وب‌سایت تحت مجوز MIT <a href="https://github.com/mohebifar/startcup">منتشر شده‌است. </a>
    </footer>);
  }
}
