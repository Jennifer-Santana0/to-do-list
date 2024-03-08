const ModelTask = require('../models/Task')

const getIdTask = (req,res) => {
    ModelTask.find().then((tasks)=>{
        ModelTask.findOne({_id:req.params.id}).then((nomeTask)=>{
            res.render('index',{tasks,nomeTask})
        }).catch((err)=>{
            console.log('erro')
        })
    }).catch((err)=> {
        console.log('houve um erro')
    })
}

const editarTask = async (req,res) => {
    try{
        const task = req.body
        await ModelTask.updateOne({_id: req.params.id},task)
        res.redirect('/')
    }catch(err){

    }
}



module.exports = {
    getIdTask,
    editarTask
}