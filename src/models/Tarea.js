const mongoose=require('mongoose');
const tareaSchema= new mongoose.Schema({
    nombre:{
        type:String
    },
    descripcion:{
        type:String
    },
    finalizada:{
        type:Boolean,
        default:false
    },
    fechaCreacion:{
        type:Date,
        default:Date.now
    },
    fechaActualizacion:{
        type:Date,
        default:Date.now
    },

});

exports.Tarea=new mongoose.model('tareas',tareaSchema);