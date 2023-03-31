const router = require('express').Router();
const colEtuController = require('../controllers/colEtu.controller');

// Route pour créer un étudiant
router.post('/',colEtuController.create);

// Route pour récupérer tous les étudiants
router.get('/all', colEtuController.findAll);

// Route pour récupérer un étudiant par son numéro d'étudiant
router.get('/:id', colEtuController.findOne);

// Route pour mettre à jour un étudiant par son numéro d'étudiant
router.put('/:id', colEtuController.update);

// Route pour supprimer un étudiant par son numéro d'étudiant
router.delete('/:id', colEtuController.delete);


module.exports = router;