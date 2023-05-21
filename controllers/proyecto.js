const TipoProyecto = require("../models/tipoProyecto")
const Cliente = require("../models/cliente")
const Universidad = require("../models/universidad")
const Etapa = require("../models/etapa")
const Proyecto = require("../models/proyecto")
const { request, response } = require("express")

//crear
const createProyecto = async (req = request, res = response) => {
    try {
        const data = req.body
        console.log(data)
        const { etapa, universidad, cliente, tipoProyecto } = data
        //validacion etapa
        const etapaDB = Etapa.findOne({ _id: etapa._id, estado: true })
        if (!etapaDB) {
            return res.status(400).json({ msg: 'Etapa invalida' })
        }
        //validacion universidad
        const universidadDB = Universidad.findOne({ _id: universidad._id, estado: true })
        if (!universidadDB) {
            return res.status(400).json({ msg: 'Universidad invalida' })
        }
        //validacion cliente
        const clienteDB = Cliente.findOne({ _id: cliente._id, estado: true })
        if (!clienteDB) {
            return res.status(400).json({ msg: 'Cliente invalido' })
        }
        //validacion tipoProyecto
        const tipoProyectoDB = TipoProyecto.findOne({ _id: tipoProyecto._id, estado: true })
        if (!tipoProyectoDB) {
            return res.status(400).json({ msg: 'Tipo invalido' })
        }

        const proyecto = new Proyecto(data)
        await proyecto.save()

        return res.status(201).json(proyecto)
    } catch (e) {
        return res.status(500).json({ msg: "Error general" + e })
    }
}

//listar todos
const getProyecto = async (req = request, res = response) => {
    try {
        const proyectoDB = await Proyecto.find()
            .populate({
                path: 'etapa',
                match: { estado: true }
            })
            .populate({
                path: 'universidad',
                match: { estado: true }
            })
            .populate({
                path: 'cliente',
                match: { estado: true }
            })
            .populate({
                path: 'tipoProyecto',
                match: { estado: true }
            })
        return res.json(proyectoDB)
    } catch (e) {
        return res.status(500).json({ msg: "Error general" + e })
    }
}

//editar
const updateProyectoByID = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const data = req.body
        data.fechaActualizacion = new Date()
        const proyecto = await Proyecto.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(proyecto)
    } catch (e) {
        return res.status(500).json({ msg: "Error general" + e })
    }
}

module.exports = { createProyecto, getProyecto, updateProyectoByID }