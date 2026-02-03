const express = require('express');
const router = express.Router();
const albumController = require('./album.controller');

router.get('/', albumController.list);
router.get('/form', albumController.form);
router.get('/form/:id', albumController.form);
router.post('/save', albumController.save);
router.get('/delete/:id', albumController.delete);

module.exports = router;