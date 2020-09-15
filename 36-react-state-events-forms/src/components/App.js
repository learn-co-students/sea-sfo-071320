import React, { Component } from 'react';

import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

class App extends Component {
  state = {
    recipes: ['Pizza', 'Pasta', 'Tacos'],
    buttonText: 'Click Me',
  };

  // logSomething = (e) => {
  //   this.setState({ buttonText: 'Clicked' });
  // };

  addNewRecipe = (newRecipe) => {
    const newRecipes = [...this.state.recipes, newRecipe];

    this.setState({ recipes: newRecipes });

    // this.setState((prevState) => {
    //   return { recipes: [...prevState.recipes, newRecipe] };
    // });
  };

  render() {
    return (
      <div>
        <h1>Recipe List</h1>
        <RecipeList recipes={this.state.recipes} />

        <RecipeForm addNewRecipe={this.addNewRecipe} />

        {/* <button onClick={this.logSomething}>{this.state.buttonText}</button> */}
      </div>
    );
  }
}

export default App;
