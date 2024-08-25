const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: true, 
        minlength: [3, 'El limite de caracteres es 3'] // Mensaje personalizado
    },
    tipo: { 
        type: String, 
        required: true, 
        minlength: [3, 'El limite de caracteres es 3'] // Mensaje personalizado
    },
    raza: { 
        type: String, 
        required: true, 
        minlength: [3, 'El limite de caracteres es 3'] // Mensaje personalizado
    },
    sexo: { 
        type: String, 
        required: true, 
        minlength: [3, 'El limite de caracteres es 3'] // Mensaje personalizado
    },
    edad: { 
        type: Number, 
        required: true, 
        minlength: [3, 'El limite de caracteres es 3'] // Mensaje personalizado
    },
    otrosDatos: {
        type: String,
        required: [false, "Los otros datos son opcionales"]
      },
    likes: { type: Number, default: 0 }  // Agregar el campo likes

}, { timestamps: true });

function arrayLimit(val) {
    return val.length <= 3;
}

module.exports = mongoose.model('Pet', PetSchema);



