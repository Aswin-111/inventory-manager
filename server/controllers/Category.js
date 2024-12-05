const getAllCategory = async (req, res, next) => {
    try {
        const categories = await Category.find(); // Assuming you are using Mongoose
        res.status(200).json({
            status: 'success',
            data: categories
        });
    } catch (error) {
        next(createError(500, 'Failed to retrieve categories'));
    }
};

const createCategory = async (req, res, next) => {
    try {
        const { name } = req.body;

        if (!name) {
            throw createError(400, 'Category name is required');
        }

        const categoryPhoto = req.file 
            ? `/uploads/categories/${req.file.filename}`
            : null;

        const newCategory = await Category.create({
            category_name: name,
            category_photo: categoryPhoto
        });

        res.status(201).json({
            status: 'success',
            message: 'Category created successfully',
            data: newCategory
        });
    } catch (error) {
        // If there's an error and a file was uploaded, delete it
        if (req.file) {
            await deleteOldImage(`/uploads/categories/${req.file.filename}`);
        }
        next(error);
    }
};

module.exports = {
    getAllCategory,
    createCategory
};