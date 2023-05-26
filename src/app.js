require('dotenv').config();

const express = require('express');
const moongose = require('mongoose');
const {appRoute, productRoute} = require('./Routes');

const app = express();
const PORT = 3000;

app.use(express.json());

//!RUTAS:
app.use('/', appRoute)
app.use('/books', productRoute)

const start = async () => {
    try {
        await moongose.connect(process.env.CONNECTION_DB);
        console.log('connection successful');

        app.listen(PORT, () => {
            console.log('port listening')
        });
    } catch (error) {
        console.log('error in server', error);
    }
}
start();