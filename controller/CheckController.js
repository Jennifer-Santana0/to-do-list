const ModelTask = require('../models/Task')


const taskCheck = async (req,res) => {
    try{
        const task = await ModelTask.findOne({_id:req.params.id})

        task.check? task.check = false : task.check = true

        
        await ModelTask.updateOne({_id:req.params.id}, task)
        res.redirect('/')

    }catch(err){
        req.flash('error_msg',"Houve algum erro!")
    }
}

module.exports = {
    taskCheck
}