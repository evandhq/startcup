import React, { Component } from 'react';
import styles from './Table.scss';
import { persianNumber } from 'utils/persian';
const league = [
  {name: 'ایوند', image: 'evand.jpg', points: 12, diff: +10},
  {name: 'جابینجا', image: 'jobinja.png', points: 9, diff: 5},
  {name: 'دیجی‌کالا', image: 'digikala.jpg', points: 5, diff: 4},
  {name: 'ای‌نتورک', image: 'anetwork.png', points: 4, diff: -1},
  {name: 'کاموا', image: 'camva.jpg', points: 2, diff: -6}
];

export default class Table extends Component {
  render() {
    return (<div className={styles.wrapper}>
      <table className={styles.leagueTable}>
        <thead>
        <tr>
          <th style={{width: 50}}/>
          <th />
          <th>تیم</th>
          <th>تفاضل گل</th>
          <th>امتیاز</th>
        </tr>
        </thead>
        <tbody>
        {
          league.map((data, key) => <tr key={key}>
            <td>{persianNumber(key + 1)}</td>
            <td><img src={require('../../images/teams/' + data.image)} alt=""/></td>
            <td>{data.name}</td>
            <td>{persianNumber(data.diff)}</td>
            <td>{persianNumber(data.points)}</td>
          </tr>)
        }
        </tbody>
      </table>
  </div>)
    ;
  }
}
