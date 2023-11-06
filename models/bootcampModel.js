const mongoose = require('mongoose')

const BootcampSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, "Nombre es requerido"]
        },
        phone: {
            type: Number, 
            required: [true, "Teléfono es requerido"],
            maxlength: [10, "Teléfono no debe ser mayor a 10 digitos"],
            minlength: [7, "Teléfono debe tener al menos 7 digitos"]
        },
        address: {
            type: String, 
            required: [true, "Dirección requerida"]
        },
        topics: {
            type: [ String ],
            enum: ["Backend", "Frontend", "Devops", "AI"]
        },
        createdAt: {
            type: Date
        }
    }
)

module.exports = mongoose.model("Bootcamp",
                                BootcampSchema)