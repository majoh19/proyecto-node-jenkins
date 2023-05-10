const { Router } = require('express')
const {createProyecto, getProyecto, /*updateInventarioByID*/} = require('../controllers/proyecto')

const router = Router()

router.post('/', createProyecto)
router.get('/', getProyecto)
//router.put('/:id', updateInventarioByID)

module.exports = router