const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nombre requerido"],
    },
    email: {
        type: String, 
        required: [true, "Email requerido"]
    },
    role: {
        type: String,
        reqired: [true, "Rol requerido"]
    },
    password:{
        type: String,
        required: [true, "Contraseña requerida"]
    }
})
module.exports = mongoose.model("User", UserSchema)
