const mongoose = require('mongoose')

async function connectresponse(){
    const dbUrl = "mongodb://localhost:27017/pro"
    // const dbUri = "mongodb://localhost:27017/getmeip"
    try{
    const response=await mongoose.connect(dbUrl)
    console.log('success')
    }catch(ex){
        console.log("error",ex.message)
    }

}

// async function connectResponse(){
//     // const dbUrl = "mongodb://localhost:27017/products"
//     const dbUri = "mongodb://localhost:7000/getmeip"
//     try{
//     const response=await mongoose.connect(dbUri)
//     console.log('success')
//     }catch(ex){
//         console.log("error",ex.message)
//     }

// }
// module.exports=connectResponse;
module.exports=connectresponse;