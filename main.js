const express = require('express')
const cors = require('cors')
const connectresponse = require('./database/data')
const productRouter = require('./Router/product1')

const app = express()
app.use(express.json())
app.use(cors())

app.use(productRouter);

app.use(logger);
function logger(req,res,next){
    console.info(new Date(), req.method, req.path);
    next()
}

connectresponse().then(()=>{
app.listen(3005,()=>{
    console.log("server is working at http://localhost:3005")
})

// app.listen(7000,()=>{
//     console.log("server is working at http://localhost:7000")
// })
})