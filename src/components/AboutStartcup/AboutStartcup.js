import React, { Component } from 'react';
import styles from './AboutStartcup.scss';

export default class AboutStartcup extends Component {
  render() {
    return (<div className={styles.container}>
      <h2>درباره استارت‌کاپ</h2>
      <p>
        استارت‌کاپ یه لیگ فوتسال دورهمی بین استارتاپ‌ها و شرکت‌های فعال حوزه IT هست که اعضای تیمش رو
        افراد مختلف اون استارتاپ از تیم فنی تا فروش، پیشتیبانی و ... تشکیل می‌دن.
      </p>
      <p>
        <a href="#" className={styles.signUp}>
          <i className="ion-person-stalker"/> تیم ما هم می‌خواد شرکت کنه
        </a>
      </p>
    </div>);
  }
}
