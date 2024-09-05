const express = require('express');
const router = express.Router();

// Sample movie data
const movies = [
  { id: 1, title: 'The Shawshank Redemption' },
  { id: 2, title: 'The Godfather' },
  { id: 3, title: 'The Godfather Part II' }
];

// Routes for movies
router.get('/', (req, res) => {
  res.send(movies);
});

router.get('/:id', (req, res) => {
  const movie = movies.find(h => h.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('The movie with the given ID was not found.');
  res.send(movie);
});

router.post('/', (req, res) => {
    
    if (!Array.isArray(req.body)) {
        return res.status(400).send('An array of movies is required');
    }

    const newMovies = req.body.map((movie, index) => {
        if (!movie.title) {
            return res.status(400).send(`Title is required for movie at index ${index}`);
        }
        return {
            id: movies.length + 1 + index,  
            title: movie.title
        };
    });

    movies.push(...newMovies);  
    res.send(newMovies);  
});


module.exports = router;
