const { Router } = require("express")
const {createTipoEquipo, getTipoEquipos, updateTipoEquipoByID} = require("../controllers/tipoEquipoController")
const router = Router()

router.post("/", createTipoEquipo)
router.put("/:id", updateTipoEquipoByID)
router.get("/", getTipoEquipos)

module.exports = router
