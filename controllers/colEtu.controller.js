const colEtuModel = require('../models/colEtu.model');



// Route pour créer un étudiant
module.exports.create = async (req, res) => 
{
    const {
        numEtudiant,
        firstname,
        lastname,
        cycle,
        adresse,
        email,
        cours
    } = req.body;

    try
    {
        const colEtu = await colEtuModel.create({
            numEtudiant,
            firstname,
            lastname,
            cycle,
            adresse,
            email,
            cours
        });

        res.status(201).json({
            success: true,
            message: 'Etudiant créé',
            data: colEtu
        });
    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }

}


// Route pour récupérer tous les étudiants
module.exports.findAll = async (req, res) =>
{
    try
    {
        const colEtu = await colEtuModel.find();

        res.status(200).json({
            success: true,
            message: 'Liste des étudiants',
            data: colEtu
        });
    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}


// Route pour récupérer un étudiant par son numéro d'étudiant
module.exports.findOne = async (req, res) =>
{
    const numEtu = req.params.id;

    if (!numEtu)
    {
        return res.status(400).json({
            success: false,
            message: 'Numéro d\'étudiant requis'
        });
    }

    try
    {
        const colEtu = await colEtuModel.findOne({ numEtudiant: numEtu });

        if (!colEtu)
        {
            return res.status(404).json({
                success: false,
                message: 'Etudiant non trouvé'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Etudiant trouvé',
            data: colEtu
        });

    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}


// Route pour mettre à jour un étudiant par son numéro d'étudiant
module.exports.update = async (req, res) =>
{
    const {
        numEtudiant,
        firstname,
        lastname,
        cycle,
        adresse,
        email,
        cours
    } = req.body;

    try
    {
        const colEtu = await colEtuModel.findOneAndUpdate({ numEtudiant: numEtudiant }, {
            firstname,
            lastname,
            cycle,
            adresse,
            email,
            cours
        }, { new: true });

        res.status(200).json({
            success: true,
            message: 'Etudiant mis à jour',
            data: colEtu
        });
    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}


// Route pour supprimer un étudiant par son numéro d'étudiant
module.exports.delete = async (req, res) =>
{
    const numEtu = req.params.id;

    if (!numEtu)
    {
        return res.status(400).json({
            success: false,
            message: 'Numéro d\'étudiant requis'
        });
    }

    try
    {
        const colEtu = await colEtuModel.findOneAndDelete({ numEtudiant: numEtu });

        if (!colEtu)
        {
            return res.status(404).json({
                success: false,
                message: 'Etudiant non trouvé'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Etudiant supprimé'
        });
    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }   
}


// Update to add field ects


module.exports.updateEcts = async (req, res) =>


{

    
}