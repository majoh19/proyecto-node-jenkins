const { Router } = require("express")
const {createTipoProyecto, getTipoProyecto, /*updateTipoEquipoByID*/} = require("../controllers/tipoProyecto")
const router = Router()

router.post("/", createTipoProyecto)
router.get("/", getTipoProyecto)
//router.put("/:id", updateTipoEquipoByID)

module.exports = router
