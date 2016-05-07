import React, { Component } from 'react';
import styles from './Game.scss';

export default class Game extends Component {
  render() {
    return (<div className={styles.wrapper}>
      <div className={styles.upcomingGame}>
        <div className={styles.team}>
          <div className={styles.logo}>
            <img src={require('../../images/teams/evand.jpg')} alt=""/>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.matchNumber}>
            بازی ۱
          </div>
          <div className={styles.result}>
            <div>VS</div>
          </div>
          <div className={styles.matchNumber}>
            نامشخص
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
