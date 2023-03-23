const { Router } = require("express")
const {createUsuario, getUsuarios, updateUsuarioByID} = require("../controllers/usuarioController")
const router = Router()

router.post("/", createUsuario)
router.put("/:id", updateUsuarioByID)
router.get("/", getUsuarios)

module.exports = router