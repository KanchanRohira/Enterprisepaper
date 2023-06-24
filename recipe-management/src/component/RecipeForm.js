import React, { useState } from 'react';

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    image: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      image: file
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic with the recipe data
    console.log('Recipe:', recipe);
    // Reset the form
    setRecipe({
      title: '',
      description: '',
      ingredients: '',
      instructions: '',
      image: null
    });
  };

  return (
    <div>
      <h2>Create/Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={recipe.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={recipe.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageUpload}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default RecipeForm;
