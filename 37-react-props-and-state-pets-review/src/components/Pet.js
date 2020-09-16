import React from 'react';

class Pet extends React.Component {
  // renderButton = () => {
  //   if (this.props.pet.isAdopted) {
  //     return <button className="ui disabled button">Already adopted</button>;
  //   } else {
  //     return <button className="ui primary button">Adopt pet</button>;
  //   }
  // };

  // handleAdoptClick = () => {
  //   this.props.onAdoptPet(this.props.pet.id);
  // };

  render() {
    // const {
    //   pet: { name, weight, age, owners: [owner1, {first, last}] },
    //   onAdoptPet
    // } = this.props;

    const { name, weight, age, type, gender, isAdopted, id } = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* {this.renderButton()} */}

          {isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              className="ui primary button"
              onClick={() => {
                this.props.onAdoptPet(id);
              }}
            >
              {/* <button className="ui primary button" onClick={this.handleAdoptClick}> */}
              {/* <button className="ui primary button" onClick={this.props.onAdoptPet}> */}
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;

// const myCallback = () => {}

// document.addEventListener('click', myCallback)
