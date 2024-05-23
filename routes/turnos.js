// backend/routes/turnos.js
const router = require('express').Router();
let Turno = require('../models/Turno');

// Obtener todos los turnos
router.route('/').get((req, res) => {
    Turno.find()
        .then(turnos => res.json(turnos))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Crear un nuevo turno
router.route('/add').post((req, res) => {
    const nombre = req.body.nombre;
    const fecha = Date.parse(req.body.fecha);
    const servicio = req.body.servicio;

    const nuevoTurno = new Turno({
        nombre,
        fecha,
        servicio,
    });

    nuevoTurno.save()
        .then(() => res.json('Turno agregado!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Eliminar un turno
router.route('/:id').delete((req, res) => {
    Turno.findByIdAndDelete(req.params.id)
        .then(() => res.json('Turno eliminado.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Editar un turno
router.route('/update/:id').post((req, res) => {
    Turno.findById(req.params.id)
        .then(turno => {
            turno.nombre = req.body.nombre;
            turno.fecha = Date.parse(req.body.fecha);
            turno.servicio = req.body.servicio;

            turno.save()
                .then(() => res.json('Turno actualizado!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
