const mongoose = require('mongoose');

const colEtuSchema = new mongoose.Schema({

    numEtudiant : {
        type: String,
        required: true,
        unique: true
    },

    firstname: {
        type: String,
        required: true
    },

    lastname : {
        type: String,
        required: true
    },

    cycle: {
        type: Number,
        required: true,
        min: 1,
        max: 3
    },

    adresse :  {
        type: {
                num: Number,
                rue: String,
                ville: String,
                pays: String
            },
        required: true,
        _id: false
    },

    email: {
        type: [String],
        required: true
    },

    cours : {
        type: [
            {
                code: String,
                titre: String,
                description: String,
                credit: Number,
            }
        ],
        required: true,
        _id: false

    }
},
{
    timestamps: true
});

const colEtu = mongoose.model('colEtu', colEtuSchema);
module.exports = colEtu;