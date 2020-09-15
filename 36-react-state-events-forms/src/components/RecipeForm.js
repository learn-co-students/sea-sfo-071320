import React, { Component } from 'react';

class RecipeForm extends Component {
  state = {
    inputText: '',
    descriptionText: '',
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.addNewRecipe(this.state.inputText);
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="">Recipe Name</label>
        <input
          type="text"
          placeholder="New Recipe"
          value={this.state.inputText}
          onChange={this.handleOnChange}
          name="inputText"
        />
        <input
          type="text"
          placeholder="Description"
          value={this.state.descriptionText}
          onChange={this.handleOnChange}
          name="descriptionText"
        />
        <input type="submit" />
      </form>
    );
  }
}

export default RecipeForm;
