const { Router } = require("express")
const {createCliente, getCliente, updateClienteByID} = require("../controllers/cliente")
const router = Router()

router.post("/", createCliente)
router.get("/", getCliente)
router.put("/:id", updateClienteByID)

module.exports = router
