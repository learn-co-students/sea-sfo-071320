import React, { Component } from 'react';

class Ticker extends Component {
  state = {
    color: 'black',
    interval: null,
    value: 0,
  };

  componentDidMount() {
    console.log('starting ticker');

    const interval = setInterval(() => {
      console.log('running ticker');

      this.setState({
        value: Math.floor(Math.random() * 100),
      });
    }, 1000);

    this.setState({ interval: interval });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value > prevState.value) {
      this.setState({ color: 'green' });
    } else if (this.state.value < prevState.value) {
      this.setState({ color: 'red' });
    }
  }

  componentWillUnmount() {
    // clear interval
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div className="box" style={{ color: this.state.color }}>
        {this.state.value}
      </div>
    );
  }
}

export default Ticker;
