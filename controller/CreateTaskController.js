const ModelTask = require('../models/Task')

const main = (req,res) => {
    let listTask = ModelTask.find().then((listTask)=>{
        res.render('index',{listTask})
    }).catch((err)=>{
        console.log('deu um erro')
    })
}

const createTask = async (req,res) => {
    const NameTask = await req.body
    await ModelTask.create(NameTask)

    await res.redirect('/')
}

module.exports = {
    main,
    createTask
}



