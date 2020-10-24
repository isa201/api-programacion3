

//CRUD de tareas
const express=require('express');
const router = express.Router();

//GET:traiga el listado de tareas
router.get("/api/tareas", (request, response) => {
  response.send([{ nombre: "tarea 1" }, { nombre: "tarea 2" }]);
});

//GET:Una tarea determinada
router.get("/api/tareas/:id", (request, response) => {
  response.send({ nombre: "tarea 1" });
});

//POST:Crear una tarea

//PUT:actualizar una tarea

//DELETE:eliminar una tarea

//PUT:Cambiar el estado de una tarea

//GET:buscar una tarea por criterio

module.exports=router;