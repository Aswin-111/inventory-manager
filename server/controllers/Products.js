const { Products } = require("../database/products/Products");
const { deleteOldImage } = require('../middleware/multer');
const createError = require('http-errors');

// ... (previous validation helper code remains the same)

const createProduct = async (req, res, next) => {
    try {
        const {
            category,
            productname,
            sku,
            mrp,
            sellingprice,
            shape,
            size,
            thickness
        } = req.body;

        // Validation code remains the same...

        // Get the file path if an image was uploaded
        const productimage = req.file 
            ? `/uploads/products/${req.file.filename}`
            : null;

        const newProduct = await Products.create({
            name: productname,
            category,
            sku,
            mrp: parseFloat(mrp),
            selling_price: parseFloat(sellingprice),
            products_photos: productimage,
            shapes: shape,
            size,
            thickness
        });

        res.status(201).json({
            status: "success",
            message: "Product created successfully",
            data: newProduct
        });

    } catch (error) {
        // If there's an error and a file was uploaded, delete it
        if (req.file) {
            await deleteOldImage(`/uploads/products/${req.file.filename}`);
        }
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = { ...req.body };
        
        const product = await Products.findByPk(id);
        if (!product) {
            throw createError(404, 'Product not found');
        }

        // If there's a new image
        if (req.file) {
            updateData.products_photos = `/uploads/products/${req.file.filename}`;
            // Delete old image
            await deleteOldImage(product.products_photos);
        }

        // Validation code remains the same...

        await product.update({
            name: updateData.productname || product.name,
            category: updateData.category || product.category,
            mrp: updateData.mrp || product.mrp,
            selling_price: updateData.sellingprice || product.selling_price,
            shapes: updateData.shape || product.shapes,
            size: updateData.size || product.size,
            thickness: updateData.thickness || product.thickness,
            products_photos: updateData.products_photos || product.products_photos
        });

        res.status(200).json({
            status: "success",
            message: "Product updated successfully",
            data: product
        });

    } catch (error) {
        // If there's an error and a new file was uploaded, delete it
        if (req.file) {
            await deleteOldImage(`/uploads/products/${req.file.filename}`);
        }
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const product = await Products.findByPk(id);
        if (!product) {
            throw createError(404, 'Product not found');
        }

        // Delete product image if it exists
        await deleteOldImage(product.products_photos);

        await product.destroy();

        res.status(200).json({
            status: "success",
            message: "Product deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};

const getAllProducts = async (req, res, next) => {
    try {
        // Fetch all products from the database
        const products = await Products.findAll();

        // Check if any products were found
        if (!products || products.length === 0) {
            return res.status(404).json({
                status: "fail",
                message: "No products found"
            });
        }

        // Return the list of products
        res.status(200).json({
            status: "success",
            message: "Products retrieved successfully",
            data: products
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts // Exporting the new function
};