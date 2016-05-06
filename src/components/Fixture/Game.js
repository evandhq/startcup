import React, { Component } from 'react';
import styles from './Game.scss';

export default class Game extends Component {
  render() {
    return (<div className={styles.wrapper}>
      <div className={styles.upcomingGame}>
        <div className={styles.team}>
          <div className={styles.logo}>
            <img src={require('../../images/teams/anetwork.png')} alt=""/>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.matchNumber}>
            بازی ۶
          </div>
          <div className={styles.result}>
            <div>12:1</div>
          </div>
          <div className={styles.matchNumber}>
            ۱۰ خرداد ۹۴
          </div>
        </div>
        <div className={styles.team}>
          <div className={styles.logo}>
            <img src={require('../../images/teams/jobinja.png')} alt=""/>
          </div>
        </div>
      </div>
    </div>);
  }
}
