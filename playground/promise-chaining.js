require('../src/db/mongoose')
const User=require('../src/models/users')

//5f48842c68304429a0ee6515

User.findByIdAndUpdate('5f488fa300b5a2038081f381',{age:21}).then((user) =>{
    console.log(user)
    return User.countDocuments({age:21})
}).then((result) =>{
    console.log(result)
}).catch((e) =>{
    console.log(e)
})