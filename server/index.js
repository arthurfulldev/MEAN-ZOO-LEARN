'use strict'

/* Conexion a mongo */
let mongoose = require('mongoose');

/* Inicializar express */
let app = require('./app');
let port = process.env.PORT || 3789;

mongoose.connect( 'mongodb://localhost:27017/zoo', { useNewUrlParser: true })
.then(
    () => {
        // Creacion de servidor
        app.listen(port, () => {
            console.log( 'Servidor con node y express corriendo...' );
        })
        console.log('conexion establecida...')
    }
)
.catch( error => console.log(error));