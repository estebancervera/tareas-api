const express = require('express');
const router = express.Router();

const { createHomework, updateHomework, getAllTareas, deleteHomework } = require('../controllers/homework-controller');

//MODELS

router.get('/', getAllTareas);
router.post('/', createHomework);
router.put('/:id', updateHomework);
router.delete('/:id', deleteHomework);

//NON-EXISTENT REDIRECT

module.exports = router;
