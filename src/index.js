console.log(1);

const Sequelize = require('sequelize');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// const sequelize = new Sequelize('dbname', 'user', 'secret', {
//     host: 'pg',
//     dialect: 'postgres'
// });

const sequelize = new Sequelize('postgres://user:secret@pg:5432/dbname');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection established');
        setupApp();
    })
    .catch(() => {
        console.log('Connection error');
        setupApp();
    });

async function setupApp(){
    console.log('starting app');
    const app = express();
    app.use(cors());
    app.use(bodyParser({urlExtended: true}));
    app.get('/', (req, res) => {
        res.send('Hello world from docker');
    });
    app.listen(80, () => console.log('Server is listening on port 80'));
}
