'use strict'
// Modules
let bcrypt = require('bcrypt-nodejs');

// Models
let User = require('../models/UserModel');

// Servicios y middlewares
let jwt = require('../services/jwt');

// Actions
function createUser ( req, res ) {
    let params = req.body;
    let user = new User();

    user.name    = params.name;
    user.surname = params.surname;
    user.email   = params.email;
    user.role    = 'ROLE_USER',
    user.image   = null;

    if( params.password ){
        bcrypt.hash(params.password, null, null, ( err, hash) => {
            user.password = hash
        })
    }

    User.findOne({email: user.email}, (err, usr ) => {
        if(err) {
            res.status(500).send({message: 'Hay conflicto para seguir...'})
        }
        else {
            if( !usr ){
                user.save( (err, store) => {
                    if(err) {
                        res.status(500).send({ message: 'No se puede guardar este usuario verifique su registro' })
                    }
                    else {
                        if( !store ){
                            res.status(404).send({ message: 'No se registro usuario'});
                        } else {
                            res.status(200).send({ message: store})
                        }
                    }
                })
            } else {
                res.status(500).send({ message: 'Este usuario ya exite'})
            }
        }
    })
}

function login( req, res ) {
    let params = req.body;
    let email = params.email;
    let password = params.password;

    User.findOne({ email: email }, (err, usr) => {
        if(err) {
            res.status(500).send({ message: 'Se produjo un error interno, intenta nuevamnete mas tarde.'})
        }else {
            if ( !usr ) {
                res.status(404).send({message: 'Error de credenciales. No se ha podido comprobar el usuario.'})
            } else {
                bcrypt.compare( password, usr.password, ( err, check ) => {
                    if( err ){
                        return res.status(500).send({ message: 'Se produjo un error interno. Intenta mas tarde'})
                    }
                    if(check) {
                        if( params.getToken ) {
                            res.status(200).send({
                                token: jwt.createToken(usr),
                                user: req.user
                            })
                        }else {
                            res.status(200).send({
                                message: token,
                                user: req.user
                            })
                        }
                    } else {
                        res.status(404).send({message: 'Error de credenciales. La contraseña o el correo son invalidos.'})
                    }
                })
            }
        }
    });
}

function updateUser ( req, res ){
    let userID = req.params.id;
    let update = req.body;

    if( userID != req.user.sub ) {
        return res.status(500).send({message: 'No tienes permiso para modificar este usuario.'})
    }

    User.findByIdAndUpdate(userID, update, {new: true},( err, userUpdate ) => {
        if ( err ) {
            res.status(500).send({
                messsage: 'Error al actualizar el usuario.'
            })
        } else {
            if ( !userUpdate ) {
                res.status(404).send({
                    message: 'No se ha podido actualizar el usuario.'
                })
            } else {
                res.status(200).send({
                    message: 'Usuario se actualizo correctamente.',
                    user: userUpdate
                });
            }
        }
    })
}

module.exports = {
    createUser,
    login,
    updateUser
}