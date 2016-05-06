import React, { Component } from 'react';
import Game from 'components/Fixture/Game';
import GameSchedule from 'components/Fixture/GameSchedule';
import styles from './UpcomingGames.scss';

export default class UpcomingGames extends Component {
  render() {
    return (<div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.colTable}>
          <GameSchedule />
        </div>
        <div className={styles.colUpcoming}>
          <Game />
        </div>
      </div>
    </div>);
  }
}
