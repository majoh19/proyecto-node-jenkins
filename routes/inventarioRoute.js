const { Router } = require('express')
const {createInventario, getInventarios} = require('../controllers/inventarioController')

const router = Router()

router.post('/', createInventario)

router.get('/', getInventarios)

module.exports = router