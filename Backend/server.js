const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

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


app.listen(process.env.PORT || 7000, () => {
    console.log("Server connection done")
})