const productData = require("../database/product1");

async function allproducts(req,res,next){
    const pro = await productData.find();
    return res.send({
        data1:pro
    })
}

    async function postdata(req,res,next){
        const { pro : productdata1 } = req.body;
        let pro= new productData(productdata1)
        await pro.save();
    
        return res.send({
            message:"movie has added"
        });
    
    }

    //patch
    async function updateData(req,res,next){
        const { pro:productdata1} = req.body;
        const {id:productId} = req.params;
    
        // let movie = await movieData.updateOne({
        //     id:movieId
        // },movieData1)
    
        let pro = await productData.findById(productId)
       for(const [key,value] of Object.entries(productdata1)){
        pro[key] = value;
       }
       await pro.save();
    
          return res.send({
            message:"updated",
            data:pro,
        })
    
    }

    //delete

    async function deleteProduct(req, res, next) {
        const { id: productId } = req.params;
    
        await productData.findByIdAndDelete(productId)
    
        return res.send({
            message: "Product has been deleted."
        })
    }




module.exports = {
    allproducts,
    postdata,
    updateData,
    deleteProduct

}