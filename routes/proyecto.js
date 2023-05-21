const { Router } = require('express')
const {createProyecto, getProyecto, updateProyectoByID} = require('../controllers/proyecto')

const router = Router()

router.post('/', createProyecto)
router.get('/', getProyecto)
router.put('/:id', updateProyectoByID)

module.exports = router