const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/TP`,
{
    auth: {
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD
    }

})
.then((res) => {
    console.log('Connexion à la base de données réussie');
})
.catch((err) => {
    console.log('Connexion à la base de données échouée');
    console.log(err);
});