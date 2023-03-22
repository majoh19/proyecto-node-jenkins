const { Router } = require("express")
const {createUsuario, getUsuarios} = require("../controllers/usuarioController")
const router = Router()

router.post("/", createUsuario)

router.get("/", getUsuarios)

module.exports = router