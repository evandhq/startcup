import React, { Component } from 'react';
import Bracket from 'components/Fixture/Bracket';
import Table from 'components/Fixture/Table';
import styles from './Fixture.scss';

export default class Fixture extends Component {
  render() {
    return (<div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.colTable}>
          <select defaultValue="1" className={styles.selectGroup}>
            <option value="1">گروه A</option>
            <option value="2">گروه B</option>
          </select>
          <Table />
        </div>
        <div className={styles.colBracket}>
          <Bracket />
        </div>
      </div>
    </div>);
  }
}
