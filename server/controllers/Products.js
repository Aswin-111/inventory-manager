
const {Products} = require("../database/products/Products")

const db = require("../database/Seq")



let getAllProducts = async (req, res) => {
    try {  
        const products = await Products.findAll()
        res.status(200).json({products})
    } 
    catch (error) {
        res.status(400).json({error})
    }
}


let createProduct = async (req, res) => {
    try {  
        


        
        // const products = await Category.findAll()
        




       
       
        const {category,productname,productimage,sku,mrp,sellingprice,shape,size,thickness} = req.body
         console.log(productname,sku,mrp,sellingprice,shape,size,thickness)
        // {
        //     productname: 'Clock', =>console.log(req.body)
        //     sku: '10',
        //     mrp: '600',
        //     sellingprice: '400',
        //     shape: 'Square',
        //     size: '121x8',
        //     thickness: '5 MM'
        //   }
        // await db.query(`INSERT INTO productcategories (category_name,category_photo) VALUES ('${req.body.name}','${req.body.img.image}')`)
        //    await db.query(`INSERT INTO products (name, category, sku, mrp, selling_price, products_photos, shapes, size, thickness) VALUES ('${productname}', '${category}' , '${sku}', '${mrp}', '${sellingprice}', '${productimage}', '${shape}', '${size}', '${thickness}'`)
        db.query(`INSERT INTO products (name, category, sku, mrp, selling_price, products_photos, shapes, size, thickness) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [productname, category , sku, mrp, sellingprice, productimage, shape, size, thickness], (err, results) => {
            if(err) {
            console.log(err)
            return res.status(200).json({status : "false"})

            }
            return res.status(200).json({status : "success"})

          });
    } 
    catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
}


module.exports = {getAllProducts,createProduct}