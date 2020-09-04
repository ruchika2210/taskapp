const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true
})



// const me=new User({
//     name:' Ruchika Gohil',
//     email:'ruchika@gmail.com ',
//     password:' Vasantara7710  '
// })

// me.save().then((me) =>{
//     console.log(me)

// }).catch((error) =>{
//     console.log('Error!',error)  
// })

// challenege



// tk.save().then((tk) =>{
//     console.log(tk)
// }).catch((error) =>{
//     console.log(error)
// })