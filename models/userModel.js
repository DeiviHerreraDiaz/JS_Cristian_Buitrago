const mongoose = require('mongoose')
const bycryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nombre requerido"],
    },
    email: {
        type: String, 
        unique: true,
        required: [true, "Email requerido"],
        match: [
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            "Correo electrónico inválido"
        ]
    },
    role: {
        type: String,
        enum: ["admin","user","publisher"],
        default: "user",
    },
    password:{
        type: String,
        required: [true, "Contraseña requerida"],
        maxlength: [6, "Password maximo"],
        select: false
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }

})

UserSchema.pre('save', async function(){
    // Generar la sal 
    const sal = await bycryptjs.genSalt(10, this.password)
    // Encriptar el password utilizando la sal
    this.password = await bycryptjs.hash(this.password, sal)

})

// MÉTODO PARA COMPARAR PASSWORD DE USUARIO VS PASSWORD DEL PAYLOAD  
UserSchema.methods.compararPassword = async function(password){

    return bycryptjs.compare(password, this.password)

}

// Método para crear el JWT
UserSchema.methods.generarJWT = function(){
    return jwt.sign({
        id: this._id,
        email: this.email
    },
    process.env.JWT_SECRET_KEY,
    {
        expiresIn: process.env.JWT_EXPIRE
    }   
     )
}


module.exports = mongoose.model("User", UserSchema)
