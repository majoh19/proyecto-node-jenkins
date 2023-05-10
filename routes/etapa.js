const { Router } = require("express")
const {createEtapa, getEtapa, /*updateTipoEquipoByID*/} = require("../controllers/etapa")
const router = Router()

router.post("/", createEtapa)
router.get("/", getEtapa)
//router.put("/:id", updateTipoEquipoByID)

module.exports = router
