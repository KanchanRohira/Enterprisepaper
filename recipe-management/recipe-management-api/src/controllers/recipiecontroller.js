const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost:27017/recipeApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [String],
  instructions: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);




app.post('/api/recipes', (req, res) => {
  const { title, description, ingredients, instructions } = req.body;
  const recipe = new Recipe({ title, description, ingredients, instructions });

  recipe.save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});


app.get('/api/recipes', (req, res) => {
  Recipe.find()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});


app.get('/api/recipes/:id', (req, res) => {
  const recipeId = req.params.id;

  Recipe.findById(recipeId)
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.json(recipe);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});


app.put('/api/recipes/:id', (req, res) => {
  const recipeId = req.params.id;
  const { title, description, ingredients, instructions } = req.body;

  Recipe.findByIdAndUpdate(recipeId, { title, description, ingredients, instructions }, { new: true })
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.json(recipe);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});


app.delete('/api/recipes/:id', (req, res) => {
  const recipeId = req.params.id;

  Recipe.findByIdAndDelete(recipeId)
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.json({ message: 'Recipe deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

