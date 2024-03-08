const ModelTask = require('../models/Task')

const editarTask = (req,res) => {
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


module.exports = {
    editarTask,
}