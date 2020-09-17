import React, { Component } from 'react';

class GrandChild extends Component {
  constructor() {
    super();

    this.state = {
      buttonText: 'Grandchild',
    };

    console.log('%c GrandChild CONSTRUCTOR', 'color: purple');
  }

  componentDidMount() {
    console.log('%c GrandChild DID MOUNT', 'color: purple');
  }

  componentDidUpdate() {
    console.log('%c GrandChild DID UPDATE', 'color: purple');
  }

  render() {
    console.log('%c GrandChild RENDER', 'color: purple');

    return (
      <div className="box">
        <button
          onClick={() => {
            this.setState((prevState) => ({
              buttonText: prevState.buttonText + '!',
            }));
          }}
        >
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default GrandChild;
