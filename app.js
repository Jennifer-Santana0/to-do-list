const express = require('express')
const path = require('path')
const app = express()

const PORT = 3000

//CONFIGURACOES

    //TEMPLATE ENGINE
    app.set('view engine','ejs')
    //CSS JS IMG
    app.use(express.static(path.join(__dirname, 'public')))

    

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

