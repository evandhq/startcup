import React, { Component, PropTypes } from 'react';
import 'themes/default.scss';
import { Link } from 'react-router';
import Navbar from 'components/Navbar/Navbar';
import Jumbotron from 'components/Jumbotron/Jumbotron';
import AboutStartcup from 'components/AboutStartcup/AboutStartcup';
import UpcomingGames from 'components/LandingPage/UpcomingGames';
import Fixture from 'components/LandingPage/Fixture';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { children } = this.props;

    return (<div>
      <Navbar />
      <Jumbotron />
      <AboutStartcup />
      <UpcomingGames />
      <Fixture />
    </div>);
  }
}
