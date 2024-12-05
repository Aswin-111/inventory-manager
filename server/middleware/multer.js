const multer = require('multer');
const path = require('path');
const fs = require('fs');
const createError = require('http-errors');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp'
};

const createMulterStorage = (uploadPath) => {
    return multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            const name = file.originalname
                .toLowerCase()
                .split(' ')
                .join('-')
                .split('.')
                .slice(0, -1)
                .join('-');
            const extension = MIME_TYPES[file.mimetype];
            cb(null, `${name}-${Date.now()}.${extension}`);
        }
    });
};

const fileFilter = (req, file, cb) => {
    const allowedMimes = Object.keys(MIME_TYPES);
    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPG, PNG and WebP are allowed'), false);
    }
};

// Create separate upload instances for different types of images
const productUpload = multer({
    storage: createMulterStorage(path.join(__dirname, '../uploads/products')),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    },
    fileFilter: fileFilter
});

const categoryUpload = multer({
    storage: createMulterStorage(path.join(__dirname, '../uploads/categories')),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    },
    fileFilter: fileFilter
});

// Helper function to delete old image
const deleteOldImage = async (imagePath) => {
    if (!imagePath) return;
    
    const fullPath = path.join(__dirname, '..', imagePath.replace(/^\/uploads/, 'uploads'));
    
    try {
        if (fs.existsSync(fullPath)) {
            await fs.promises.unlink(fullPath);
        }
    } catch (error) {
        console.error('Error deleting old image:', error);
    }
};

module.exports = {
    productUpload,
    categoryUpload,
    deleteOldImage
};
