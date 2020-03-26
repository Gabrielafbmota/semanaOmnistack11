const express = require('express')
const route = express.Router()

const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


route.post('/sessions', SessionController.create)

route.post('/ongs', OngController.create)
route.get('/ongs', OngController.index)

route.post('/incidents', IncidentsController.create)
route.get('/incidents', IncidentsController.index)
route.delete('/incidents/:id', IncidentsController.delete)

route.get('/profile', ProfileController.index)

module.exports = route