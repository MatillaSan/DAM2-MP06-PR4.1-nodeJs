const express = require('express');
const router = express.Router();
// Importa el controlador
const { getEventById, addEvent } = require('../controllers/eventControllers');

// Utilitza el controlador per a la ruta que llista tots els usuaris
router.post('/events', addEvent);
router.get('/events/:id', getEventById);

module.exports = router;