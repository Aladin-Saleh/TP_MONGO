const dotenv        = require('dotenv').config({ path: './config/.env' });

const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');

const colEtuRoutes  = require('./routes/colEtu.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion à la base de données
require('./databases/mongo.database');


app.get('/', (req, res) => {

    res.status(200).json({
        success: true,
        message: 'Route par défaut'
    });
});


app.use('/api/colEtu', colEtuRoutes);


app.listen(process.env.PORT, () => {
    console.log();
    console.log(`http://localhost:${process.env.PORT}` );
});
