const mongoose = require('../config')

const inventorySchema = mongoose.Schema({
   
    material_name : String,
    product_category : String,
    unit : String,
    qty : String
})


module.exports = mongoose.model('inventory', inventorySchema)