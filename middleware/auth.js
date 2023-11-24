const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

// Middleware para proteger rutas a usuarios no logueados para 
exports.protect = async(req, res, next) => {

    let token
    // 1. Verificar si existe el header 'Authorization'
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.
        headers.
        authorization.
        split(' ')[1]
    }
    if(!token){

        return res.status(401).json({success: false, msg: "Empty token"})

    } else {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        // console.log(decoded);
        req.user = await userModel.findById(decoded.id)
        next()
    }
}

// Middleware para proteger de usuarios que no tengan el rol especifico 

exports.authorize = async(req, res, next) => {

}