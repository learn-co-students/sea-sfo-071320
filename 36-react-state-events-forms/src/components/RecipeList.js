import React from 'react';

import Recipe from './Recipe';

function RecipeList(props) {
  const renderRecipes = () => {
    return props.recipes.map((recipe, i) => <Recipe key={i} recipe={recipe} />);
  };

  return (
    <ul>
      {/* {props.recipes.map((recipe, i) => (
        <Recipe key={i} recipe={recipe} />
      ))} */}

      {renderRecipes()}
    </ul>
  );
}

export default RecipeList;
