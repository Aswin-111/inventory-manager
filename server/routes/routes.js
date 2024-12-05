const express = require('express');
const router = express.Router();
const { productUpload, categoryUpload } = require('../middleware/multer');
const productsController = require('../controllers/Products');
const categoryController = require('../controllers/Category');

// Products routes
router.get('/getallproducts', productsController.getAllProducts);
router.post('/createproduct', productUpload.single('productimage'), productsController.createProduct);
router.put('/products/:id', productUpload.single('productimage'), productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

// Category routes
router.get('/getallcategories', categoryController.getAllCategory);
router.post('/createcategory', categoryUpload.single('category_photo'), categoryController.createCategory);

module.exports = router;