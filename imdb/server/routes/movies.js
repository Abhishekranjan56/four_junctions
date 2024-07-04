const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', movieController.getAllMovies);
router.post('/', authMiddleware, movieController.createMovie);
router.put('/:id', authMiddleware, movieController.updateMovie);

module.exports = router;

// Implement similar routes for actors and producers
