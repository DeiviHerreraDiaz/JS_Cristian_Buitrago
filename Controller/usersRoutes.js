const express = require('express')
const userModel = require('../models/userModel')
const router = express.Router()


// Registro de usuarios
router.post('/register',async (req, resp) => {

    try {
    const user = await userModel.create(req.body)
    // Crear token 
    const token =  user.generarJWT()
    resp.status(201).json({success: true, data: user, token_jwt: token})    
    } catch (error) {        
    resp.status(500).json({success:false, message: error.message})
    }

}) 


// Inicio de sesión
router.post('/login', async (req, resp) =>{

    // 1. NO LLEGA EMAIL O PASSWORD
    const {email, password} = req.body;

    if(!email || !password){

        return resp.status(400).json({success: false, message: "Faltan email o password"})

    } else{

        const user = await userModel.findOne({email}).select("+password")

        console.log(user);

        if(!user){
            
             return resp.status(400).json({success: false, message: "Usuario no existe"})

        }else{
            
            const isMatch = await user.compararPassword(password) 

            console.log(isMatch);

            if(isMatch){
                const token = user.generarJWT()

                // Opciones para creación de la cookie

                const options = {

                    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
                    httpOnly: true,

                }


                return resp.status(200).cookie('token', token, options).json({success: true, message: "Usuario logueado correctamente", data: user, jwt_token: token})
            } else {
                return resp.status(400).json({success: false, message: "Credenciales incorrectas"})
            }

        }
    }



})






router.get('/', async (req, resp) =>{

    const users = await userModel.find()

    resp.json({
        success: true,
        data: users
    })
})

router.get('/:id', async (req, resp) =>{
    
    userId = req.params.id
    const user = await userModel.findById(userId)

    resp.json({
        success: true,
        data: user 
    })
})

router.post('/', async (request, response) => {

    const newUser = await userModel.create(request.body)

    response.json({
        success: true,
        data: newUser
    })
})

router.put('/:id', async (req, resp) =>{

    userId = req.params.id

    const updateUser = await userModel.findByIdAndUpdate(userId, req.body, {new: true})

    resp.json({
        success: true,
        data: updateUser
    })
})

router.delete('/:id', async (req, resp) =>{

    userId = req.params.id
    const deleteUser = await userModel.findByIdAndDelete(userId)

    resp.json({
        success: true,
        data: deleteUser 
    })
})

module.exports = router