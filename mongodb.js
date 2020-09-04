//CRUD create read update delete

// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient  //destructuring down
// const objectID=mongodb.objectID

const{MongoClient,objectID, ObjectID}=require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

const id=new ObjectID()
// console.log(id.getTimestamp())
console.log(id.id.length)
console.log(id.toHexString().length)


MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client) =>{
    if(error) {
       return console.log('unable to connect to database');
    }
    // console.log('Connected correctly!')
    const db=client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Ruchika',
    //     age:21
    // }
   
    // ,(error,result) =>{
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)

    //  })

//     db.collection('tasks').insertMany([{
//         description:'Hello there my name is Ruchika',
//         completed:true
//     },
//     {
//         description:'Hello there i am doing tasks',
//         completed:false
//     },

//     {
//         description:'Hello there i have almost done',
//         completed:true
//     }
// ],(error,result) =>{
//     if(error){
//         return console.log('unable to insert')
//     }
//     console.log(result.ops)
// })


// db.collection('users').findOne({_id:new ObjectID("5f429769d1e96944d4e4b774")},(error,user ) =>{
//     if(error){
//         return console.log('Unable to fetch')
//     }
//     console.log(user)

// })

// db.collection('users').find({age:21}).toArray((error,users)=>{
//     console.log(users)
// })

// db.collection('users').find({age:21}).count((error,users)=>{
//     console.log(users)
// })

//challenge
// db.collection('users').findOne({_id:new ObjectID("5f43dda726c3c0176cc074d5")},(error,user ) =>{
//         if(error){
//             return console.log('Unable to fetch')
//         }
//         console.log(user)

// })

// db.collection('tasks').find({completed:false}).toArray((error,tasks) =>{
//     console.log(tasks)
// })

// db.collection('users').updateOne({
//     _id:new ObjectID("5f429769d1e96944d4e4b774")

// },{
//     // $set:{
//     //     name:'Shivam',
//     //     age:17
//     // }

//     $inc:{
//         age:1
//     }
// }).then((result) =>{
//     console.log(result)
// }).catch((error) =>{
//     console.log(error)
// })
// updatePromise.then((result) =>{
//     console.log(result)
// }).catch((error) =>{
//     console.log(error)
// })

//challenge
// db.collection('tasks').updateMany({
//      completed:false

// },{
//     $set:{
//         completed:true
//     }
// }).then((result) =>{
//     console.log(result)
// }).catch((error) =>{
//     console.log(error)
// })


//delete
// db.collection('users').deleteMany({
//     age:21
// }).then((result) =>{
//     console.log(result)
// }).catch((error) =>{
//     console.log(error)
// })

//challenge
db.collection('tasks').deleteMany({
    description:"Hello there i am doing tasks"
}).then((result) =>{
        console.log(result)
    }).catch((error) =>{
        console.log(error)
    })

    })  
