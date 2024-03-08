const express = require('express')
const routes = express.Router()
const CreateController = require('../controller/CreateController')


routes.get('/',CreateController.renderIndex)
routes.post('/create',CreateController.createTask)



module.exports = routes