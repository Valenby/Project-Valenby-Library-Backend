require('dotenv').config();

const express = require('express');
const moongose = require('mongoose');
const {appRoute,authRoute, userRoute, productRoute, carritoRoute, adminRoute,comprarRoute } = require('./Routes');

const app = express();
const PORT = process.env.PUERTO;
app.use(express.json());

//!RUTAS:
app.use('/api', appRoute);
app.use('/api/login', authRoute);
app.use('/api/users', userRoute);
app.use('/api/books', productRoute);
app.use('/api/carrito', carritoRoute);
app.use('/api/admin/verCompras', adminRoute);
app.use('/api/comprar',comprarRoute)


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