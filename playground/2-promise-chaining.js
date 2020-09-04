require('../src/db/mongoose')
const Task = require('../src/models/task')

//5f48842c68304429a0ee6515

Task.findByIdAndUpdate('5f4884587e9e5c2bb0aaed27',{description:'heyyyyyy chikaaa'}).then((task) =>{
    console.log(task)
    return Task.countDocuments({description:'heyyyyyy chikaaa'})
}).then((result) =>{
    console.log(result)
}).catch((e) =>{
    console.log(e)
})


ask.findByIdAndUpdate('5f4884587e9e5c2bb0aaed27',).then((task) =>{
    console.log(task)
    return Task.countDocuments({description:'heyyyyyy chikaaa'})
}).then((result) =>{
    console.log(result)
}).catch((e) =>{
    console.log(e)
})