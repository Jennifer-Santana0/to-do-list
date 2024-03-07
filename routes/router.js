const express = require('express')
const routes = express.Router()
const TaksController = require('../controller/TaksController')



routes.get('/',TaksController.getAll)

module.exports = routes