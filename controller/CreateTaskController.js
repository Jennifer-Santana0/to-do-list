const ModelTask = require('../models/Task')

const main = (req,res) => {
    ModelTask.find().then((listTask)=>{
        res.render('index',{listTask,task:''})
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



