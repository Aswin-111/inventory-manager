const mongoose = require('../config')

const categorySchema = mongoose.Schema({
    category_name : String,
    filename : String,

})


module.exports = mongoose.model('category', categorySchema)