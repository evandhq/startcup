import React, { Component, PropTypes } from 'react';
import styles from './Table.scss';
import { persianNumber } from 'utils/persian';

export default class Table extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired
  };

  render() {
    const { table } = this.props;

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
          table.map((data, key) => <tr key={key}>
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
