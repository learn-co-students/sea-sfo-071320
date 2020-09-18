import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogList from './Hogs/HogList';
import Filters from './Filters';
import { sortByName } from '../utils';
import BanishedHogList from './Hogs/BanishedHogList';

class App extends Component {
  state = { hogs: [], showGreased: false, filterBy: 'name', banishedHogs: [] };

  componentDidMount() {
    // This is where we fetch stuff
    this.setState({ hogs: hogs });
  }

  // Handlers
  handleToggleGreased = () => {
    this.setState({ showGreased: !this.state.showGreased });
  };

  handleFilterBy = (e) => {
    this.setState({ filterBy: e.target.value });
  };

  handleHideHog = (hog) => {
    this.setState({ banishedHogs: [...this.state.banishedHogs, hog] });
  };

  // Filter and sorting
  filterByGreased = () => {
    if (this.state.showGreased) {
      return this.state.hogs.filter((hog) => hog.greased);
    }

    return this.state.hogs;
  };

  sortHogs = () => {
    if (this.state.filterBy === 'name') {
      return sortByName(this.filterByGreased(), 'name');
    }

    if (this.state.filterBy === 'weight') {
      return this.filterByGreased().sort(function (a, b) {
        return a.weight - b.weight;
      });
    }
  };

  filterBanishedHogs = () => {
    // Looking into our banished hogs array and checking if
    // the current hog (that we're iterating over) is inside that array
    return this.sortHogs().filter((hog) => this.state.banishedHogs.indexOf(hog) === -1);
  };

  redeemHog = (hog) => {
    this.setState({
      banishedHogs: this.state.banishedHogs.filter((h) => h.name !== hog.name),
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filters
          showGreased={this.state.showGreased}
          handleToggleGreased={this.handleToggleGreased}
          filterBy={this.state.filterBy}
          handleFilterBy={this.handleFilterBy}
        />
        <HogList hogs={this.filterBanishedHogs()} handleHideHog={this.handleHideHog} />
        <hr />
        <h1>Banished Hogs</h1>
        <BanishedHogList
          banishedHogs={this.state.banishedHogs}
          redeemHog={this.redeemHog}
        />
      </div>
    );
  }
}

export default App;
