const { Router } = require("express")
const {createEstadoEquipo, getEstadoEquipos} = require("../controllers/estadoEquipoController")
const router = Router()

router.post("/", createEstadoEquipo)

router.get("/", getEstadoEquipos)

module.exports = router