const  mongoose  = require("mongoose");

const  productname = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   

})
const productdata = new mongoose.model("products",productname)
 module.exports= productdata