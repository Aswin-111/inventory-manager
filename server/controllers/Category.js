// const Category = require("../database/products/Category")
const Products = require("../database/products/Products")




const db = require("../database/Seq")

let getAllCategory = async (req, res) => {
    try {  
       
        
        const categories = await db.query("SELECT * FROM productcategories")
      

        console.log(categories)
        res.status(200).json({categories})
    } 
    catch (error) {
        res.status(400).json({error})
    }
}


let createCategory = async (req, res) => {
    try {  
        


        
        // const products = await Category.findAll()
        




       
        
        await db.query(`INSERT INTO productcategories (category_name,category_photo) VALUES ('${req.body.name}','${req.body.img.image}')`)

        res.status(200).json({status : "success"})
    } 
    catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
}


module.exports = {getAllCategory,createCategory}