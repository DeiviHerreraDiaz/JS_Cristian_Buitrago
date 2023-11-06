const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nombre requerido"],
    }

})

module.exports = mongoose.model("Review", UserSchema)
