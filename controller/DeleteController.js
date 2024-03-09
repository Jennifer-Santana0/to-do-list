const ModelTask = require('../models/Task')

const getById = (req,res) => {
    const idTaskDelete = req.params.id
    const nomeTaskDelete = req.params.nome
    ModelTask.find().then((tasks)=>{
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