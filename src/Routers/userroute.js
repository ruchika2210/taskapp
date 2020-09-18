const express=require('express')
const router=express.Router()
const User=require('../models/users')
// router.get('/test',(req,res) =>{
//     res.send('From  a new file')
// })


router.post('/users', async (req,res) =>{
    const user=new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
    // user.save().then(()=>{
    //     res.send(user)
    // }).catch((error) =>{
    //     res.status(400).send(error)
            
    // })
})

router.get('/users',async (req,res) =>{

    try {
        const users=await User.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send(error)

    }
    // User.find({}).then((users) =>{
    //     res.send(users)
    // }).catch((error) =>{
    // })
})

router.get('/users/:id', async (req,res) =>{
    const _id=req.params.id
    try {
        const user=await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }

    // User.findById(_id).then((user) =>{
    //     if(!user){
    //         return res.status(404).send

    //     } 
    //     res.send(user)

    // }).catch((e) =>{
    //      res.status(500).send(e)
    // })
//   console.log(  req.params)
})


router.patch('/users/:id',async (req,res)=>{
    const updates=Object.keys(req.body)
    const allowedupdates=['name','email','password','age']
    const isValidoperation=updates.every((update) =>{
               return allowedupdates.includes(update)                                                                                         
    })

    if(!isValidoperation){
        return res.status.send({error:'Invalid updates!'})
    }
        try {
            const user=await User.findByIdAndUpdate(req.params.id,req.body,{new :true,runValidators:true})
            if(!user){
                return res.status(404).send()
            }
            res.send(user)
        } catch (error) {
            res.status(400).send(error)
        }
})


router.delete('/users/:id',async(req,res) =>{
    try {
        const user=await findOneAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})



module.exports=router