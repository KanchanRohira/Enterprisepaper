import React from 'react';

const RecipeList = () => {
  const recipes = [
    {
      id: 1,
      title: 'Recipe 1',
      description: 'This is recipe 1.',
      thumbnail: 'recipe1-thumbnail.jpg'
    },
    {
      id: 2,
      title: 'Recipe 2',
      description: 'This is recipe 2.',
      thumbnail: 'recipe2-thumbnail.jpg'
    },
    {
      id: 3,
      title: 'Recipe 3',
      description: 'This is recipe 3.',
      thumbnail: 'recipe3-thumbnail.jpg'
    }
  ];

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <img src={recipe.thumbnail} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
