const ModelTask = require('../models/Task')

const getById = async (req,res) => {
    const idTaskDelete = await req.params.id
    const nomeTaskDelete = await req.params.nome
    await ModelTask.find().then((tasks)=>{
        res.render('index', {tasks,nomeTask:'',modal:true,idTaskDelete,nomeTaskDelete})
    })
}

const deleteTask = async (req,res) => {
    try{
        await ModelTask.deleteOne({_id:req.params.id})
        res.redirect('/')
    }catch(err){
        console.log('erro'+err)
    }
    
}


module.exports = {
    deleteTask,
    getById
}