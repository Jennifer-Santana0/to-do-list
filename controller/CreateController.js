const ModelTask = require('../models/Task')

const renderIndex = async (req,res) => {
    try{
        ModelTask.find().then((tasks)=>{
            res.render('index', {tasks,nomeTask:''})
        })
    }catch(err){
        console.log('Ocorreu algum erro')
    }
    
}

const createTask = async (req,res) => {
    try{
        const nome = await req.body
        await ModelTask.create(nome)
        res.redirect('/')
    }catch(err){
        console.log('Ocorreu algum erro')
    }
    
}



module.exports = {
    renderIndex,
    createTask
}