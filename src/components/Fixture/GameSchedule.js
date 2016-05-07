import React, { Component } from 'react';
import styles from './GameSchedule.scss';

export default class GameSchedule extends Component {
  render() {
    return (<div className={styles.wrapper}>
      <div className={styles.items}>
        {
          [1].map((i, k) => <div className={styles.item} key={k}>
            <div className={styles.team}>
              <img
                className={styles.logo}
                src={require('images/teams/evand.jpg')}
                alt="Evand"
              />
              { ' ' }
              ایوند
            </div>
            <div className={styles.date}>
              نامشخص <i className="ion-calendar"/>
            </div>
            <div className={styles.team}>
              <img
                className={styles.logo}
                src={require('images/teams/jobinja.png')}
                alt="Evand"
              />
              { ' ' }
              جابینجا
            </div>
          </div>)
        }
        <div>
          <p style={{padding: 10, textAlign: 'center'}}>
            <i className="ion-information-circled" />
            { ' ' }
            برنامهٔ بازی‌ها زمان اتمام ثبت نام و پر شدن ظرفیت اعلام خواهد شد
          </p>
        </div>
      </div>
    </div>);
  }
}
