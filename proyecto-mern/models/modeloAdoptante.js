const mongoose = require('mongoose');

const adoptanteShema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor proporciona el nombre.'],
        minLength: [3, 'Por favor proporciona un nombre real.']
    },
    apellido:{
        type: String,
        required: [true, 'Por favor proporcione su apellido'],
        minLength: [3, 'Por favor proporciona un apellido mas largo']
    },
    edad:{
        type: Number,
        required: [true, 'Por favor proporciona la edad.'],
    },
    correo:{
        type: String,
        required: [true, 'Por favor proporcione su correo.'],
        minLength: [4, 'Por favor proporciona un correo real']
    },
    contrasena:{
        type: String,
        required: [true, 'Por favor proporcione su contrasena'],
        minLength: [3, 'Por favor proporciona una contraseña mas segura']
    },
    telefono:{
        type: Number,
        minLength: [10, 'Por favor proporciona un numero de telefono real']
    },
    ciudad:{
        type: String,
        required: [true, 'Por favor proporciona el nombre.'],
        minLength: [5, 'Por favor proporciona una ubicación real.']
    }, 
    estiloDeVida:{
        type: String,
        required: [true, 'Por favor comenta sobre su estilo de vida para buscar la mascota adecuada para usted'],
        minLength: [30, 'Por favor proporciona una informacion mas detallada']
    }, 
},
{timestamps: true});

const Adoptante = mongoose.model('adoptante', adoptanteShema); 

module.exports = Adoptante; 