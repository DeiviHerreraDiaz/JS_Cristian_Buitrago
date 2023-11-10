const mongoose = require('mongoose')

const BootcampSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: [true, "Nombre ya se escuentra utilizado"],
            required: [true, "Nombre es requerido"]
        },
        phone: {
            type: Number, 
            required: [true, "Teléfono es requerido"],
            max: [999999999, "Teléfono no debe ser mayor a 10 digitos"],
            min: [1111111, "Teléfono debe tener al menos 7 digitos"]
        },
        address: {
            type: String, 
            required: [true, "Dirección requerida"]
        },
        topics: {
            type: [ String ],
            enum: ["Backend", "Frontend", "Devops", "AI"]
        },
        userReference: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

module.exports = mongoose.model("Bootcamp",
                                BootcampSchema)