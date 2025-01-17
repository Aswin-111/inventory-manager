const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();
const jwt = require("jsonwebtoken");
const auth = require("./middlewares/auth");

const stocks = require("./models/items/stocks");

const category = require("./models/items/category");

const inventory = require("./models/items/inventory");
const users = require("./models/user/user");
// leads

const leads = require("./models/orders/leads");
const port = 5000; // Corrected to match the listening port
app.use(express.json({ limit: "24mb" }));

app.use("/img", express.static(path.join(__dirname, "img")));
// Middleware to enable CORS
app.use(cors());

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Ensure the uploads directory exists (you may want to add error handling here)
    cb(null, "img/");
  },
  filename: function (req, file, cb) {
    // Use the original filename or generate a unique one
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid collisions
  },
});

// Initialize multer with the defined storage
const upload = multer({ storage: storage });

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const user = await users.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, "dorakart_key");

    return res
      .status(200)
      .json({ message: "Login successful", token, username: user.username });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { username, name, password, role } = req.body;

    if (!username || !name || !password || !role) {
      return res
        .status(400)
        .json({ message: "Username, name, password, and role are required" });
    }

    const existingUser = await users.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const newUser = await users.create({ username, name, password, role });

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// app.use(auth);
app.get("/allproducts", async (req, res) => {
  try {
    const allproducts = await stocks.find();
    return res.json(allproducts);
  } catch (err) {
    return res.status(400).send(err);
  }
});

app.get("/getallstocks", async (req, res) => {
  try {
    const created_stock = await stocks.find();
    return res.json(created_stock);
  } catch (err) {
    return res.status(400).send(err);
  }
});

app.post("/createstock", upload.single("productimage"), async (req, res) => {
  // Check if a file was uploaded
  // http://localhost:5000/img/1733162340053.png
  console.log(req.body);

  const {
    productname,
    sku,
    category,
    mrp,
    sellingprice,
    shape,
    size,
    thickness,
  } = req.body;

  const { filename } = req.file;
  if (!req.file) {
    return res.status(400).send("File not uploaded");
  }

  // Log file details for debugging

  try {
    // Ensure req.body.stock is defined and valid
    if (!productname) {
      return res.status(400).send("Stock data is required");
    }

    const stock_data = await stocks.find({ name: productname });

    if (!stock_data.length > 0) {
      const created_stock = await stocks.create({
        name: productname,
        category: category,
        sku: sku,
        mrp: mrp,
        selling_price: sellingprice,
        products_photos: filename,
        shapes: shape,
        size: size,
        thickness: thickness,
      });

      // Return the created stock entry as a JSON response
      return res.status(201).json(created_stock);
    } else {
      return res.status(400).json({
        data: "Product already exists",
      });
    }
  } catch (error) {
    // Handle any errors that occur during stock creation
    console.error("Error creating stock:", error);
    return res.status(500).json({ error });
  }
});

app.post("/updatestock", upload.single("productimage"), async (req, res) => {
  // Accessing form data
  const productName = req.body.productname;
  const sku = req.body.sku;
  const category = req.body.category;
  const mrp = req.body.mrp;
  const sellingPrice = req.body.sellingprice;
  const shape = req.body.shape;
  const size = req.body.size;
  const thickness = req.body.thickness;

  // Accessing the uploaded file
  const productImage = req.file; // If you are uploading a file

  // Handle your logic here (e.g., saving to a database)

  try {
    const stock_data = await stocks.find({ name: productName });

    const item = stock_data[0].products_photos;

    const filepath = path.join(__dirname, "img", item);
    console.log(item, filepath);

    if (fs.existsSync(filepath)) {
      fs.unlink(filepath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${err}`);
          return res.status(500).send("Error deleting old image");
        }
        console.log(`Deleted old image: ${filepath}`);
      });
    }

    const updatedStock = await stocks.findOneAndUpdate(
      { name: productName },
      {
        category: category,
        sku: sku,
        mrp: mrp,
        selling_price: sellingPrice,
        shapes: shape,
        size: size,
        thickness: thickness,
        products_photos: productImage.filename,
      },
      { new: true }
    );
    return res.status(200).json(updatedStock);
  } catch (err) {
    return res.status(400).json(err);
  }

  res.send("Stock updated successfully!");
});

app.post("/deletestock", async (req, res) => {
  try {
    console.log(req.body.id);
    const data = await stocks.findOne({ _id: req.body.id });

    console.log(data);
    const deleted_stock = await stocks.deleteOne({ _id: req.body.id });
    return res.json(deleted_stock);
  } catch (err) {
    return res.status(400).json(err);
  }
});

// category routes
app.get("/allcategories", async (req, res) => {
  try {
    const allcategories = await category.find();
    return res.json(allcategories);
  } catch (err) {
    return res.status(400).send(err);
  }
});

app.get("/getstock", async (req, res) => {
  try {
    console.log(req.query.id);
    const stock_data = await stocks.find({ _id: req.query.id });
    console.log(stock_data);
    return res.status(200).json(stock_data);
  } catch (err) {
    return res.status(400).send(err);
  }
});

// app.post('/createcategory', upload.single("img"), async (req, res) => {
//     console.log(req.file)
//     if (!req.file) {
//         return res.status(400).send("File not uploaded");
//     }

//     // Log file details for debugging
//     console.log(req.file);

//     try {
//         if (!req.body.stock) {
//             return res.status(400).send("Stock data is required");

//         }

//         const created_category = await category.create(req.body.category);
//         return res.json(created_category);
//     }
//     catch (err) {
//         return res.status(400).send(err);
//     }
// })

// Start the server
app.post("/createcategory", upload.single("file"), async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).send("File not uploaded");
    }

    // Parse the request body carefully
    const { stock } = req.body;

    if (!stock) {
      return res.status(400).send("Stock data is required");
    }

    // Create category with file path included

    const category_data = await category.find({ category_name: stock });

    console.log(category_data);
    if (!category_data.length > 0) {
      const created_category = await category.create({
        category_name: stock,
        filename: req.file.filename, // Assuming you want to store the file path
      });

      return res.json(created_category);
    } else {
      return res.status(400).json({
        data: "Category already exists",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
});

app.post("/addlead", async (req, res) => {
  try {
    const lead = req.body;
    console.log(lead);
    const lead_data = await leads.create(lead);
    return res.status(200).json({ status: "done", lead_data });
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.get("/getleads", async (req, res) => {
  try {
    const leads_data = await leads.find();
    return res.status(200).json(leads_data);
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.get("/getnewleads", async (req, res) => {
  try {
    const leads_data = await leads.find({ status: "new" });
    return res.status(200).json(leads_data);
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.get("/getwonleads", async (req, res) => {
  try {
    const leads_data = await leads.find({ status: "won" });
    return res.status(200).json(leads_data);
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.get("/getfollowupleads", async (req, res) => {
  try {
    const leads_data = await leads.find({ status: "followup" });
    return res.status(200).json(leads_data);
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.get("/getleadbyid", async (req, res) => {
  try {
    console.log(req.query);
    let data = await leads.find({ _id: req.query.id });
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});
app.put("/updatelead", async (req, res) => {
  try {
    const lead = req.body;
    console.log(lead);
    const lead_data = await leads.updateOne({ _id: lead._id }, lead);
    return res.status(200).json({ status: "done", lead_data });
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.delete("/deletelead", async (req, res) => {
  try {
    const lead = req.body;
    console.log(lead);
    const lead_data = await leads.deleteOne({ _id: lead._id });
    return res.status(200).json({ status: "done", lead_data });
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.get("/getalltasks", async (req, res) => {
  try {
    const tasks = await task.find();
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.post("/addtask", async (req, res) => {
  try {
    const task = req.body;
    console.log(task);
    const task_data = await task.create(task);
    return res.status(200).json({ status: "done", task_data });
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.put("/updatetask", async (req, res) => {
  try {
    const task = req.body;
    console.log(task);
    const task_data = await task.updateOne({ _id: task._id }, task);
    return res.status(200).json({ status: "done", task_data });
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.delete("/deletetask", async (req, res) => {
  try {
    const task = req.body;
    console.log(task);
    const task_data = await task.deleteOne({ _id: task._id });
    return res.status(200).json({ status: "done", task_data });
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${5000}`);
});
