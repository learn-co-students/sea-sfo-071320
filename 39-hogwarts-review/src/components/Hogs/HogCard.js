import React, { Component } from 'react';
import HogDetails from './HogDetails';

class HogCard extends Component {
  state = {
    showDetails: false,
  };

  renderImage = () => {
    const fileName = this.props.hog.name.split(' ').join('_').toLowerCase();
    let pigImage = require(`../../hog-imgs/${fileName}.jpg`);

    return <img src={pigImage} />;
  };

  handleToggleDetails = () => {
    // toggle our showDetails state
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    return (
      <div className="ui eight wide column">
        <h3>{this.props.hog.name}</h3>
        {this.renderImage()}

        {this.state.showDetails && <HogDetails hog={this.props.hog} />}
        {/* {this.state.showDetails ? <HogDetails hog={this.props.hog} /> : null} */}

        <button onClick={this.handleToggleDetails} className="ui button">
          Toggle Details
        </button>

        <button
          className="ui button"
          onClick={() => this.props.handleHogHideAndSeek(this.props.hog)}
        >
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

export default HogCard;
