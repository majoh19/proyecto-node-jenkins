const { Router } = require('express')
const {createInventario, getInventarios, updateInventarioByID} = require('../controllers/inventarioController')

const router = Router()

router.post('/', createInventario)
router.get('/', getInventarios)
router.put('/:id', updateInventarioByID)

module.exports = router