const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Titulo requerido"],
        maxlength: [20, "EL titulo debe contener maximo 20 caracteres"]
    },
    text: {
        type: String, 
        required: [true, "Texto requerido"],
        maxlength: [50, "El texto debe contener maximo 50 caracteres"],
    },
    rating: {
        type: Number, 
        required: [true, "Rating requeridas"],
        min: [1, "El número mínimo para una calificacion es 1"],
        max: [9, "El número máximo para una calificacion es 10"]
    },
    bootcampReference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bootcamp',
        required: [true, "Referencia a bootcamp requerida"]
    },
    userReference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Referencia a usuario requerida"]
    },

})

module.exports = mongoose.model("Review",
                                ReviewSchema)
