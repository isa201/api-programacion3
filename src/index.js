//imports

const { response, request } = require("express");
const express = require("express");
const app = express();
const tareasRouters=require('./routes/tareasRoutes');
const mongoose = require('mongoose');

//configuraciones

const PORT = 4000;
const MONGO_URI='mongodb://localhost:27017/programacion3-2020';
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//middelwares
app.use(express.json());

//rutas a nuestros servicios
app.use(tareasRouters);

//iniciar aplicacion
app.listen(PORT, () => console.log(`Iniciando app en puerto ${PORT}`));
