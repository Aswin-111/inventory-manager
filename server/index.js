// index.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const routes = require('./routes/routes');

const app = express();

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads");
const productUploadsDir = path.join(uploadsDir, "products");
const categoryUploadsDir = path.join(uploadsDir, "categories");

[uploadsDir, productUploadsDir, categoryUploadsDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Middleware
app.use(cors());
app.use(express.json({ limit: "24mb" }));

// Serve static files from uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    // Delete uploaded file if there's an error during request processing
    if (req.file) {
        fs.unlink(req.file.path, (unlinkError) => {
            if (unlinkError) {
                console.error('Error deleting file:', unlinkError);
            }
        });
    }
    
    console.error(err);
    res.status(err.status || 500).json({
        status: "error",
        message: err.message || "Internal server error"
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});