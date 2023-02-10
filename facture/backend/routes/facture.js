const express = require('express');

const router = express.Router();

const factureController = require('../controllers/facture');

router.post("/", factureController.createFacture);

router.get('/', factureController.getAllFacture);

router.get('/:id', factureController.getFactureById);

router.get('/title/:title', factureController.getFactureByTitle);

router.put(':id', factureController.updateFacture);

router.delete('/:id', factureController.deleteFacture);

module.exports = router

