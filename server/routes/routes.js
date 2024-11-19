const express = require('express');
const router = express.Router();

// Import your controllers

const productsController = require('../controllers/Products');
const categoryController = require('../controllers/Category');
const inventoryController = require('../controllers/Inventory');

// Define your routes
// products routes
router.get('/getallproducts', productsController.getAllProducts);
router.post('/createproduct', productsController.createProduct);


// category routes
router.get('/getallcategories', categoryController.getAllCategory);
router.post('/createcategory', categoryController.createCategory);





// inventory routes



module.exports = router;