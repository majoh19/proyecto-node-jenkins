const { Router } = require("express")
const {createMarca, getMarcas, updateMarcaByID} = require("../controllers/marcaController")
const router = Router()

router.post("/", createMarca)
router.put("/:id", updateMarcaByID)
router.get("/", getMarcas)

module.exports = router