const { Router } = require("express")
const {createCliente, getCliente, /*updateTipoEquipoByID*/} = require("../controllers/cliente")
const router = Router()

router.post("/", createCliente)
router.get("/", getCliente)
//router.put("/:id", updateTipoEquipoByID)

module.exports = router
