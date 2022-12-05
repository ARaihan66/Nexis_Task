const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

app.use(express.json());

dotenv.config({
    path: '/Backend/config/.env'
});


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((data) => {
        console.log('Database Connected Successfully!!!')
    }).catch((error) => {
        console.log('Connection Failed!!!')
    })


app.listen(process.env.PORT || 5000, () => {
    console.log("Server connection done")
})