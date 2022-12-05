const express = require('express');
const app = express();


app.use(express.json());

//Import Route
const user = require('./Router/UserRouter');


app.use('/api/user', user);


module.exports = app;