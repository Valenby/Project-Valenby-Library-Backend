require('dotenv').config();

const express = require('express');
const moongose = require('mongoose');
const {appRoute,authRoute, userRoute, productRoute, carritoRoute, adminRoute,comprarRoute } = require('./Routes');

const app = express();
const PORT = process.env.PUERTO;
app.use(express.json());

//!RUTAS:
app.use('/', appRoute);
app.use('/login', authRoute);
app.use('/users', userRoute);
app.use('/books', productRoute);
app.use('/carrito', carritoRoute);
app.use('/admin', adminRoute);
app.use('/comprar',comprarRoute)


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