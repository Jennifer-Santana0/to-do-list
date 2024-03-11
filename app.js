const express = require('express')
const path = require('path')
const routes = require('./router/routes')
const connectToDb = require('./database/db')
const session = require('express-session')
const flash = require('connect-flash')
require('dotenv').config()
connectToDb()
const app = express()

const port = process.env.PORT

//CONFIGURACOES

     //SESSION
     app.use(session({
        secret: 'nodejs',
        resave: true,
        saveUninitialized: true
    }))
    //FLASH
    app.use(flash())

    //MIDLEWARES
    app.use((req,res,next)=>{
        res.locals.success_msg = req.flash('success_msg')
        res.locals.error_msg = req.flash('error_msg')
        next()
    })

    //TEMPLATE ENGINE
    app.set('view engine','ejs')
    //CSS JS IMG
    app.use(express.static(path.join(__dirname, 'public')))
    //UTILIZANDO O REQ BODY
    app.use(express.urlencoded())
    

    

app.use('/',routes)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

