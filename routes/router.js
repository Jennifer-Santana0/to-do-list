const express = require('express')
const routes = express.Router()
const TaksController = require('../controller/TaksController')



routes.get('/',TaksController.getAllTask)
routes.post('/create',TaksController.createTask)

module.exports = routes