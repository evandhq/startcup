import React, { Component } from 'react';
import styles from './Bracket.scss';

const bracket = [
  // 1/2
  [
    [null, null],
    [null, null]
  ],
  // Final
  [
    [null, null]
  ],
  // Winner
  [
    [null]
  ]
];

export default class Bracket extends Component {
  renderTeam = (team, key) => {
    return (<a
      key={key}
      className={styles.team}
      href="#">
      نامشخص
    </a>);
  };

  renderMatch = (match, key) => {
    return (<div
      className={styles.match}
      key={key}
    >
      { match.map(this.renderTeam) }
    </div>);
  };

  renderRound = (round, key) => {
    return (<div
      className={styles.round + (key === bracket.length - 1 ? ' ' + styles.winner : '')}
      key={key}
    >
      { round.map(this.renderMatch) }
    </div>);
  };

  render() {
    return (<div className={styles.wrapper}>
      <div className={styles.tournament}>
        <div className={styles.grid}>
          { bracket.map(this.renderRound) }
        </div>
      </div>
    </div>);
  }
}
