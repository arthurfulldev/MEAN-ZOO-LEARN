'use strict'

let express     = require('express');
let BodyParser  = require('body-parser');
let user_routes = require('./routes/UserRoutes');

let app = express();
app.use( BodyParser.urlencoded({extended: false}) );
app.use( BodyParser.json() );

// Rutas base.
app.use( '/api', user_routes );

// configurar cabeceras y cors
module.exports = app;