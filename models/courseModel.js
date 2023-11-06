const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Titulo requerido"],
        maxlength: [30, "El curso tiene que tener maximo 30 caracteres"],
        minlength: [10, "El curso tiene que tener al menos 10 caracteres"]
    },
    description: {
        type: String, 
        required: [true, "Descripcion es requerida"],
        minlength: [10, "La descripción tiene que tener al menos 10 caracteres"]
    },
    weeks: {
        type: Number, 
        required: [true, "Semanas requeridas"],
        min: [1, "El número mínimo de semanas para un curso es 1"],
        max: [9, "El número máximo de semanas para un curso es 9"]
    },
    enroll_cost: {
        type: Number,
        required: [true, "Costo de matricula requerida"]
    },
    minimumSkill: {
        type: [String],
        required: [true, "Nivel de habilidad mínimo requerido"],
        enum: ["Beginner", "Intermediate", "Advanced", "Expert"]
    },
    bootcampReference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bootcamp',
        required: [true, "Referencia a bootcamp requerida"]
    }
})

module.exports = mongoose.model("Course", CourseSchema)
