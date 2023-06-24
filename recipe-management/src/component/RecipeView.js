import React from 'react';

const RecipeView = () => {
  return (
    <div>
      <h2>Recipe Title</h2>
      <p>recepie view</p>
      <p>Ingredients:</p>
      <ul>
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
      </ul>
      <p>Instructions:</p>
      <ol>
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
      </ol>
      <img src="recipe-image.jpg" alt="Recipe" />
    </div>
  );
}

export default RecipeView;
