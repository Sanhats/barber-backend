
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const turnoSchema = new Schema({
    nombre: { type: String, required: true },
    fecha: { type: Date, required: true },
    servicio: { type: String, required: true }
}, {
    timestamps: true,
});

const Turno = mongoose.model('Turno', turnoSchema);

module.exports = Turno;
