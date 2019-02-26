'use strict'
// Modules
let bcrypt = require('bcrypt-nodejs');
let fs = require('fs');
let path = require('path')

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
                        return res.status(500).send({ message: 'Usuario o contraseña incorrecto, vuelve a intentarlo.'})
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
                message: 'Error al actualizar el usuario.'
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

function uploadAvatar ( req, res ) {
    let userId = req.params.id;
    let file_name = 'No se ha subido ningun archivo';
    let imgsExt = [ 'png', 'jpg', 'gif', 'jpeg', 'svg' ]

    if ( req.files) {
        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        file_name = file_split[2];
        let ext = file_name.split('.').pop();

        console.log(imgsExt.indexOf(ext));

        if( imgsExt.indexOf(ext) == -1 ) {
            fs.unlink(file_path, (err) => {
                if(err){
                    res.status(500).send({ message: 'No se pudo borrar el archivo'})
                }
                res.status(200).send({ message: 'Este arcihvo no es valido'});
            });
        } else {
            if ( !userId == req.user.sub ){
                res.status(500).send({ message: 'No tienes permisos para actualizar este usuario.' })
            }

            User.findByIdAndUpdate( userId, { image: file_name }, { new: true }, ( err, userUpdate ) => {
                if( err ) {
                    res.status(500).send({ message: 'No se pudo agregar el avatar'})
                } else {
                    if( !userUpdate ){
                        res.status(404).send({ message: 'No se ha actualizado el usuario...' })
                    }
                    res.status(200).send({ message: 'Avatar agregado', usuario: userUpdate })
                }
            })
        }
    } else {
        res.status(200).send({ message: file_name});
    }
    
}

function getImageFile( req, res ) {
    let image = req.params.imageFile;
    let path_image = './uploads/users/' + image;

    fs.exists( path_image, ( exist ) => {
        if( exist ){
            res.sendFile(path.resolve(path_image));
        } else {
            res.status(404).send({ message: 'No se encontro la imagen'})
        }
    })
}

module.exports = {
    createUser,
    login,
    updateUser,
    uploadAvatar,
    getImageFile
}