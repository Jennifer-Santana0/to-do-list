const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(
        'mongodb+srv://root:admin@cluster0.flqulby.mongodb.net/'
    ).then(()=>{
        console.log('Banco de dados conectado')
    }).catch((err)=>{
        console.log('Erro ao conectar ao banco de dados. ' + err)
    })
}


module.exports = connectToDb

