const ModelTask = require('../models/Task')

const renderIndex = async (req,res) => {
    try{
        ModelTask.find().then((tasks)=>{
            res.render('index', {tasks,nomeTask:'',modal:false})
        })
    }catch(err){
        console.log('Ocorreu algum erro')
    }
    
}

const createTask = async (req,res) => {
    try{
        const nome = await req.body
        if(nome.task==''){
            req.flash('error_msg',"Voce precisa escrever o nome da task!")
            res.redirect('/')
        } else {
            await ModelTask.create(nome)
            req.flash('success_msg',"Task criada com sucesso!")
            res.redirect('/')
        }
        
    }catch(err){
        console.log('Ocorreu algum erro')
    }
    
}



module.exports = {
    renderIndex,
    createTask
}