const ModelTask = require('../models/Task')

const getIdTask = (req,res) => {
    ModelTask.find().then((tasks)=>{
        ModelTask.findOne({_id:req.params.id}).then((nomeTask)=>{
            res.render('index',{tasks,nomeTask,modal:false})
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
        if(task.task==''){
            req.flash('error_msg',"Voce precisa escrever o nome da task!")
            res.redirect('/')
        } else {
            await ModelTask.updateOne({_id: req.params.id},task)
            req.flash('success_msg',"Task Editada com sucesso!")
            res.redirect('/')
        }
    }catch(err){
        req.flash('error_msg',"Houve algum erro!")
    }
}



module.exports = {
    getIdTask,
    editarTask
}