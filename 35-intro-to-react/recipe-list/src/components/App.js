import React from 'react';
import Recipes from './Recipes';

function App() {
  const recipes = ['Pizza', 'Tuna Melt', 'Burrito'];
  const siteTitle = 'Recipe App';

  return (
    <>
      <h1>{siteTitle}</h1>
      <Recipes allRecipes={recipes} anotherOne="Hello" />
    </>
  );
}

export default App;
