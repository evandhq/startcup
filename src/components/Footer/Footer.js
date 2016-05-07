import React, { Component } from 'react';
import styles from './Footer.scss';

export default class Footer extends Component {
  render() {
    return (<footer className={styles.wrapper}>
      این جام با همکاری
      <a href="https://evand.ir"> ایوند </a>
      برگزار می‌شه و این وب‌سایت خسته و داغون هم توسط
      <a href="https://github.com/mohebifar"> محمد </a>
      ساخته شده.
    </footer>);
  }
}
