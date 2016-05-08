import React, { Component } from 'react';
import styles from './AboutStartcup.scss';

export default class AboutStartcup extends Component {
  render() {
    return (<div className={styles.container} id="about">
      <h2>درباره استارت‌کاپ</h2>
      <p>
        استارت‌کاپ یه لیگ فوتسال دورهمی بین استارتاپ‌ها و شرکت‌های فعال حوزه IT هست که اعضای تیمش رو
        افراد مختلف اون استارتاپ از تیم فنی تا فروش، پیشتیبانی و … تشکیل می‌دن.
      </p>
      <p>
        <a href="#register" className={styles.signUp}>
          <i className="ion-person-stalker"/> تیم ما هم می‌خواد شرکت کنه
        </a>
      </p>

      <section className={styles.items}>
        <div className={styles.item}>
          <div>
            <img src={require('images/about-items/medal.svg')} alt="جایزه"/>
          </div>
          <div>
            <p>
              هنوز جایزه‌ای برای این جام در نظر گرفته نشده و این بستگی به یک سری عوامل داره و در صورتی که جایزه تعیین بشه به زودی اعلام می‌کنیم.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <img src={require('images/about-items/credit-card.svg')} alt="هزینه حضور در جام"/>
          </div>
          <div>
            <p>
              هزینه شرکت در تورنومنت برای هر تیم مبلغی حدود ۱۵۰ هزار تومان است که صرف رزرو سالن خواهد شد.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <img src={require('images/about-items/speech-bubble.svg')} alt="دورهمی"/>
          </div>
          <div>
            <p>
              هدف ما اینه که هم دور هم ورزش کنیم و هم اینکه بیش‌تر با همدیگه در ارتباط باشیم.
            </p>
          </div>
        </div>
      </section>
    </div>);
  }
}
