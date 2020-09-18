const express=require('express')
require('./db/mongoose')
const User=require('./models/users')
const Task=require('./models/task')
const { findByIdAndUpdate, findByIdAndDelete, findOneAndDelete } = require('./models/users')
const app=express()
const port=process.env.PORT || 3000
const userrouter=require('./Routers/userroute')
const taskrouter=require('./Routers/taskrouter')
const bcrypt=require('bcrypt')

app.use(userrouter)
app.use(taskrouter)

app.use(express.json())







app.listen(port,() =>{
    console.log('Server is up on port'+port)
})

const myFunction=async() =>{
    const password='Red1234!'
    const hashedpassword=await bcrypt.hash(password,8)
    console.log(password)
    console.log(hashedpassword)

    const isMatch=await bcrypt.compare('red1234!',hashedpassword)
    console.log(isMatch)


}
myFunction()
