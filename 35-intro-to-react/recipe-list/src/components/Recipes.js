import React from 'react';
import Recipe from './Recipe';

function Recipes(props) {
  console.log(props.allRecipes);

  const recipes = props.allRecipes; // ['Pizza', 'Tuna Melt', 'Burrito']

  return (
    <ul>
      {recipes.map((recipe, i) => (
        <Recipe key={i} recipeName={recipe} />
      ))}
    </ul>
  );
}

export default Recipes;
