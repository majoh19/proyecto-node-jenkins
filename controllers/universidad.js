const Universidad = require("../models/universidad")
const { request, response } = require("express")

//crear
const createUniversidad = async (req = request, res = response) => {
    try {
        const direccion = req.body.direccion ? req.body.direccion.toUpperCase() : ""
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : ""
        const data = {
            nombre, direccion
        }
        const universidad = new Universidad(data)
        console.log(universidad)
        await universidad.save()
        return res.status(201).json(universidad)
    } catch (e) {
        return res.status(500).json({
            msg: "Error general" + e
        })
    }
}

//listar
const getUniversidad = async (req = request, res = response) => {
    try {
        const universidadDB = await Universidad.find({})
        return res.json(universidadDB)
    } catch (e) {
        return res.status(500).json({
            msg: "Error general" + e
        })
    }
}

//editar
const updateUniversidadByID = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const data = req.body
        data.fechaActualizacion = new Date()
        const universidad = await Universidad.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(universidad)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msj: 'Error' })
    }
}

module.exports = { createUniversidad, getUniversidad, updateUniversidadByID }
