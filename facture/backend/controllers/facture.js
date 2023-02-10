const Facture = require('../models/factureSchema');

exports.createFacture = (req, res, next) => {
    delete req.body._id;
    facture = new Facture({
        ...req.body
    });
    facture.save()
    .then(() => res.status(201).json({ message: 'Facture enregistré !'}))
    .catch(error => res.staatus(400).json({error }));
}

exports.getAllFacture = (req, res, next) => {
    Facture.find()
    .then(facture => res.status(200).json(facture))
    .catch(error => res.status(404).json({ error}));
}

exports.getFactureById = (req, res, next) => {
    Facture.findOne({ _id: req.params.id})
    .then(facture => res.status(200).json(facture))
    .catch(error => res.status(404).json({ error}));
}

exports.getFactureByTitle = (req, res, next) => {
    const encoddedTitle = encodeURIComponent(req.params.title);
    Facture.findOne({ title: decodeURIComponent(encoddedTitle)})
    .then(facture => res.status(200).json(facture))
    .catch(error => res.status(404).json({ error}));
}

exports.updateFacture = (req, res, next) => {
    Facture.updateOne({ _id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Facture modifié !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.deleteFacture = (req, res, next) => {
    Facture.deleteOne({ _id: req.params.id})
    .then(() => res.status(200).json({message: 'Facture supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}


