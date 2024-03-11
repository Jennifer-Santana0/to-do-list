const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(process.env.DB_URI).then(()=>{
        console.log('Banco de dados conectado')
    }).catch((err)=>{
        console.log('Erro ao conectar ao banco de dados. ' + err)
    })
}


module.exports = connectToDb

