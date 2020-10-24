//imports

const { response, request } = require("express");
const express = require("express");
const app = express();

//configuraciones

const PORT = 4000;

//middelwares

//rutas a nuestros servicios

//ABM de tareas

//GET:traiga el listado de tareas
app.get("/api/tareas", (request, response) => {
  response.send([{ nombre: "tarea 1" }, { nombre: "tarea 2" }]);
});

//GET:Una tarea determinada
app.get("/api/tareas/:id", (request, response) => {
  response.send({ nombre: "tarea 1" });
});

//POST:Crear una tarea

//PUT:actualizar una tarea

//DELETE:eliminar una tarea

//PUT:Cambiar el estado de una tarea

//GET:buscar una tarea por criterio

//iniciar aplicacion
app.listen(PORT, () => console.log(`Iniciando app en puerto ${PORT}`));
