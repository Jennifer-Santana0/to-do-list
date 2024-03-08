const express = require('express')
const routes = express.Router()
const CreateTaskController = require('../controller/CreateTaskController')

routes.get('/',CreateTaskController.main)
routes.post('/create',CreateTaskController.createTask)


module.exports = routes