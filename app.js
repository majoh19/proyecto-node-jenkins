const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const tipoEquipo = require('./routes/tipoEquipoRoute')
app.use('/api/tiposequipos', tipoEquipo)

const estadoEquipo = require('./routes/estadoEquipoRoute')
app.use('/api/estadosequipos', estadoEquipo)

const usuario = require('./routes/usuarioRoute')
app.use('/api/usuarios', usuario)

const marca = require('./routes/marcaRoute')
app.use('/api/marcas', marca)

const inventario = require('./routes/inventarioRoute')
app.use('/api/inventarios', inventario)

module.exports = app