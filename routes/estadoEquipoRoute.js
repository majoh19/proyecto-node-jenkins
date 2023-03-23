const { Router } = require("express")
const {createEstadoEquipo, getEstadoEquipos, updateEstadoEquipoByID} = require("../controllers/estadoEquipoController")
const router = Router()

router.post("/", createEstadoEquipo)
router.put('/:id', updateEstadoEquipoByID)
router.get("/", getEstadoEquipos)

module.exports = router