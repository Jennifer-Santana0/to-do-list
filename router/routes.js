const express = require('express')
const routes = express.Router()
const CreateController = require('../controller/CreateController')
const EditController = require('../controller/EditarController')


routes.get('/',CreateController.renderIndex)
routes.post('/create',CreateController.createTask)
routes.get('/edit/:id',EditController.getIdTask)
routes.post('/edit/:id',EditController.editarTask)



module.exports = routes