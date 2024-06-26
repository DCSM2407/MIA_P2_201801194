const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hola MIA' });
})

// Routes of Roles
app.use('/usuario', require('./routes/usuario.routes'));
app.use('/recepcion', require('./routes/recepcion.routes'));
app.use('/admin', require('./routes/admin.routes'));

module.exports = app;
