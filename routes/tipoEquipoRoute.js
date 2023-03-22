const { Router } = require("express")
const {createTipoEquipo, getTipoEquipos} = require("../controllers/tipoEquipoController")
const router = Router()

router.post("/", createTipoEquipo)

router.get("/", getTipoEquipos)

module.exports = router
