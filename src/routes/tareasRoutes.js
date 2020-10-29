//CRUD de tareas
const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const { Tarea } = require("../models/Tarea");

//GET:traiga el listado de tareas
router.get("/api/tareas", async (request, response) => {
  const tareas = await Tarea.find();
  response.send(tareas);
});

//GET:Una tarea determinada
router.get("/api/tareas/:id", async (request, response) => {
  try {
    const { id } = request.params;
    let tarea = await Tarea.findById(id);
    if (!tarea) {
      response.status(404).send({ mensaje: "tarea no encontrada" });
      return;
    }
    response.send(tarea);
  } catch (error) {
    console.error(error);
    response.status(500).send({ mensaje: "Error desconocido" });
  }
});

//POST:Crear una tarea
router.post("/api/tareas", async (request, response) => {
  try {
    const { nombre, descripcion, finalizada } = request.body;

    const tarea = new Tarea({
      nombre,
      descripcion,
      finalizada,
    });
    let nuevaTarea = await tarea.save();
    response.status(201).send(nuevaTarea);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send({ mensaje: "Error desconocido contactarse con soporte" });
  }
});

//PUT:actualizar una tarea

router.put("/api/tareas/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const { nombre, descripcion, finalizada } = request.body;

    let tarea = await Tarea.findById(id);

    if (!tarea) {
      res
        .status(404)
        .response.send({ mensaje: `La tarea con id=${id} no existe` });
      return;
    }
    if (nombre) {
      tarea.nombre = nombre;
    }
    if (descripcion) {
      tarea.descripcion = descripcion;
    }
    if (finalizada) {
      tarea.finalizada = finalizada;
    }
    tarea.fechaActualizacion = new Date();
    tarea.save();
    res.status(200).send(tarea);
  } catch (error) {
    console.error(error);
    response.status(500).send({ mensaje: "Error desconocido" });
  }
});

//DELETE:eliminar una tarea

router.delete("/api/tareas/:id", async (request, response) => {
  try {
    const { id } = request.params;
    let tarea = await Tarea.findById(id);
    if (!tarea) {
      return response.status(404).send({ mensaje: "tara no encontrada" });
      return;
    }

    const taraEliminada = await tarea.remove();
    return response.send({ id: tareaEliminada.id, mensaje: "tarea eliminada" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ mensaje: "Error desconocido" });
  }
});
//PUT:Cambiar el estado de una tarea
router.put("/api/tareas/:id/finalizada/cambiar", async (request, response) => {
  try {
    const { id } = request.params;
    let tarea = await Tarea.findById(id);
    if (!tarea) {
      return response.status(404).send({ mensaje: "tara no encontrada" });
      return;
    }

    tarea.finalizada = !tarea.finalizada;
    tarea.save();
    return response.send(tarea);
  } catch (error) {
    console.error(error);
    router.get("/api/tareas/:id", async (request, response) => {
      try {
        const { id } = request.params;
        let tarea = await Tarea.findById(id);
        if (!tarea) {
          response.status(404).send({ mensaje: "tarea no encontrada" });
          return;
        }
        response.send(tarea);
      } catch (error) {
        console.error(error);
        response.status(500).send({ mensaje: "Error desconocido" });
      }
    });
  }
});

//GET:buscar una tarea por criterio
router.get("/api/tareas/consultar", async (request, response) => {
  try {
    const { criterio } = request.query;
    const regExpTerm = new RegExp(criterio, 'i');
    const regExprSearch=[
      {nombre:{$regex:regExpTerm}},
      {descripcion:{$regex:regExpTerm}}
    ];
    const tareas=await Tarea.find({'$or':regExprSearch});
    response.send(tare);
  } catch (error) {
    console.error(error);
    response.status(500).send({ mensaje: "Error desconocido" });
  }
});

module.exports = router;
