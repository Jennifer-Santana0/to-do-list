const express = require('express')
const path = require('path')
const routes = require('./router/routes')
const connectToDb = require('./database/db')
connectToDb()
const app = express()

const PORT = 3000

//CONFIGURACOES

    //TEMPLATE ENGINE
    app.set('view engine','ejs')
    //CSS JS IMG
    app.use(express.static(path.join(__dirname, 'public')))
    //UTILIZANDO O REQ BODY
    app.use(express.urlencoded())
    

    

app.use('/',routes)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

