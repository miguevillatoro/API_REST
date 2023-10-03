const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()

const app = express();

// Cors
const cors = require('cors');
var corsOptions = {
    origin: '*', 
    optionsSuccessStatus: 200 
}
app.use(cors(corsOptions));

// Capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a DB
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.knwuw3g.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const option = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri, option)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))

// Import routes
const authRoutes = require('./routes/auth');
const admin = require('./routes/admin');
const verifyToken = require('./routes/validate-token');

// Route middlewares
app.use('/api/user', authRoutes);
app.use('/api/admin', verifyToken, admin);

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Conexión Exitosa'
    })
});

// Iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})