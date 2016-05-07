import React, { Component } from 'react';
import Bracket from 'components/Fixture/Bracket';
import Table from 'components/Fixture/Table';
import styles from './Fixture.scss';

const groups = [
  [
    {name: 'ایوند', image: 'evand.jpg', points: 0, diff: 0},
    {name: 'جابینجا', image: 'jobinja.png', points: 0, diff: 0},
    {name: '(ثبت نام کنید!)', image: 'unknown.png', points: 0, diff: 0},
    {name: '(ثبت نام کنید!)', image: 'unknown.png', points: 0, diff: 0}
  ],
  [
    {name: '(ثبت نام کنید!)', image: 'unknown.png', points: 0, diff: 0},
    {name: '(ثبت نام کنید!)', image: 'unknown.png', points: 0, diff: 0},
    {name: '(ثبت نام کنید!)', image: 'unknown.png', points: 0, diff: 0},
    {name: '(ثبت نام کنید!)', image: 'unknown.png', points: 0, diff: 0}
  ]
];

export default class Fixture extends Component {
  state = {
    group: 0
  };

  handleChangeGroup = ({target}) => {
    this.setState({group: target.value});
  };

  render() {
    const { group } = this.state;

    return (<div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.colTable}>
          <select value={group} onChange={this.handleChangeGroup} className={styles.selectGroup}>
            <option value={0}>گروه A</option>
            <option value={1}>گروه B</option>
          </select>
          <Table table={groups[group]}/>
        </div>
        <div className={styles.colBracket}>
          <Bracket />
        </div>
      </div>
    </div>);
  }
}
