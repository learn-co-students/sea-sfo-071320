import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor() {
    super();

    this.state = {
      buttonText: 'Parent',
    };

    console.log('%c Parent CONSTRUCTOR', 'color: blue');
  }

  componentDidMount() {
    console.log('%c Parent DID MOUNT', 'color: blue');
  }

  componentDidUpdate() {
    console.log('%c Parent DID UPDATE', 'color: blue');
  }

  render() {
    console.log('%c Parent RENDER', 'color: blue');

    return (
      <div className="box">
        <button
          onClick={() => {
            this.setState((prevState) => ({
              buttonText: prevState.buttonText + '.',
            }));
          }}
        >
          {this.state.buttonText}
        </button>
        <Child />
      </div>
    );
  }
}

export default Parent;
