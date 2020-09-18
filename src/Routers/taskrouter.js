const express=require('express')
const router=express.Router()

router.get('/tasks/:id', async (req,res) =>{
    const _id=req.params.id
    try {
        const task=await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
    // Task.findById(_id).then((user) =>{
    //     if(!user){
    //         return res.status(404).send

    //     } 
    //     res.send(user)

    // }).catch((e) =>{
    //      res.status(500).send()
    // })

})


router.get('/tasks',async (req,res) =>{
    try {
        const task=await Task.find({})
         res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
    
    // Task.find({}).then((users) =>{
    //     res.send(users)
    // }).catch((error) =>{
    //     res.status(500).send()
    // })
})



router.post('/tasks',async (req,res) =>{
    const task=new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(500).send(task)
    }
    // task.save().then(() =>{
    //     res.status(201).send(task)
    // }).catch((error) =>{
    //     res.status(400).send(error)
    // })
})

router.patch('/tasks/:id',async(req,res) =>{
    const updates=Object.keys(req.body)
    const allowedupdates=['description','completed']
    const isValidtask=updates.every((update) =>{
        return allowedupdates.includes(updates)
    })

    if(!isValidtask){
        res.status(400).send({error:'invalid task'})
    }

    try {
        const task=await findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!task){
            res.status(404).send()
        }
        res.send(task)
        
    } catch (error) {
        res.status(400).send(error)
    }
    
})

module.exports=router