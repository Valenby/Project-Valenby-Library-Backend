require('dotenv').config();

const express = require('express');
//! llamada a moongose....
const { default: moongose } = require('mongoose');

const app = express();
const PORT = 300;

app.use(express.json());

//!RUTAS:
// (app.use('/), Route) 

const start = async () => {
    try {
        await moongose.connect(process.env.CONNECTION_DB);
    } catch (error) {
        
    }
}