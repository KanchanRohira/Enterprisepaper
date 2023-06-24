import React from 'react';
import RecipeList from './component/RecipeList';
import RecipeView from './component/RecipeView';
import RecipeForm from './component/RecipeForm';

const App = () => {
  return (
    <div>
      <h1>Recipe Management Application</h1>
      <RecipeList />
      <RecipeView />
      <RecipeForm />
    </div>
  );
}

export default App;
