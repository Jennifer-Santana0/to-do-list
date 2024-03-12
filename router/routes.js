const express = require('express')
const routes = express.Router()
const CreateController = require('../controller/CreateController')
const EditController = require('../controller/EditarController')
const DeleteController = require('../controller/DeleteController')
const CheckController = require('../controller/CheckController')


routes.get('/',CreateController.renderIndex)
routes.post('/create',CreateController.createTask)
routes.get('/edit/:id',EditController.getIdTask)
routes.post('/edit/:id',EditController.editarTask)
routes.get('/delete/:id/:nome',DeleteController.getById)
routes.get('/delete/:id',DeleteController.deleteTask)
routes.get('/check/:id',CheckController.taskCheck)




module.exports = routes