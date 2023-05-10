const { Router } = require("express")
const {createUniversidad, getUniversidad, /*updateTipoEquipoByID*/} = require("../controllers/universidad")
const router = Router()

router.post("/", createUniversidad)
router.get("/", getUniversidad)
//router.put("/:id", updateTipoEquipoByID)

module.exports = router
