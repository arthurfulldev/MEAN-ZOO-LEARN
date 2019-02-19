'use strict'

let jwt = require('jwt-simple');
let moment = require('moment');

let secret = 'La clave secreta para awt'

exports.createToken = ( user ) => {
    let payload =  {
        sub: user._id,                       // Valor obligado
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: moment().unix(),                // Valor obligado
        exp: moment().add(30, 'days').unix() // Valor obligado
    }
    return jwt.encode( payload, secret );
}