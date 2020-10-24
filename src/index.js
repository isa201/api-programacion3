//imports

const { response, request } = require("express");
const express = require("express");
const app = express();
const tareasRouters=require('./routers/tareasRoutes');

//configuraciones

const PORT = 4000;


//middelwares

//rutas a nuestros servicios
app.use(tareasRouters);

//iniciar aplicacion
app.listen(PORT, () => console.log(`Iniciando app en puerto ${PORT}`));
