const Etapa = require("../models/etapa")
const { request, response } = require("express")

//crear
const createEtapa = async (req = request, res = response) => {
    try {
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : ""
        const data = {
            nombre
        }
        const etapa = new Etapa(data)
        console.log(etapa)
        await etapa.save()
        return res.status(201).json(etapa)
    } catch (e) {
        return res.status(500).json({
            msg: "Error general" + e
        })
    }
}

//listar
const getEtapa = async (req = request, res = response) => {
    try {
        const etapaDB = await Etapa.find({})
        return res.json(etapaDB)
    } catch (e) {
        return res.status(500).json({
            msg: "Error general" + e
        })
    }
}

//editar
const updateEtapaByID = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const data = req.body
        data.fechaActualizacion = new Date()
        const etapa = await Etapa.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(etapa)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msj: 'Error' })
    }
}

module.exports = { createEtapa, getEtapa, updateEtapaByID } 
