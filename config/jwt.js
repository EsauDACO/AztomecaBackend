const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.createToken=(user) =>{
    return jwt.sign({
        userId: user._id,
        email:user.email,
        role:user.role
    }, process.env.SECRET, {expiresIn: '1h'}).split('.')
}

exports.verifyToken = (req,res,next) => {
    const {headload, signature} = req.cookies

    if(!headload || !signature) return res.status(401).json({msg: 'Token invalido'})
    //Nota, el jwt es dividido por '.' si no se coloca de la siguiente manera, el codigo no va a regresar los datos de validacion
        jwt.verify(`${headload}.${signature}`, process.env.SECRET, (err, decoded)=>{
        if(err) return res.status(401).json({msg:'Token invalido'})
        User.findById(decoded.userId)
        .then(user =>{
            req.user = user
            next()
        })
        .catch(err => {
            res.status(401).json({err})
            next()
        })
    })
}