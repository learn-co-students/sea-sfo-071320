import React, { Component } from 'react';
import Ticker from './Ticker';

class TickerContainer extends Component {
  state = { showTicker: true };

  render() {
    const { showTicker } = this.state;

    return (
      <div className="box">
        <button onClick={() => this.setState({ showTicker: !showTicker })}>
          {showTicker ? 'Stop Ticker' : 'Start Ticker'}
        </button>
        {showTicker && <Ticker />}
        {/* {showTicker ? <Ticker /> : null} */}
      </div>
    );
  }
}

export default TickerContainer;
