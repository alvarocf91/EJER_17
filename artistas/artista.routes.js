const express = require('express');
const router = express.Router();
const artistaController = require('./artista.controller');

router.get('/', artistaController.list);
router.get('/form', artistaController.form);
router.get('/form/:id', artistaController.form);
router.get('/:id', artistaController.detail); 
router.post('/save', artistaController.save);
router.get('/delete/:id', artistaController.delete);

module.exports = router;