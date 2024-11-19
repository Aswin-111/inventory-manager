
const express = require("express")

const app = express();




const cors = require("cors");
const routes = require('./routes/routes')

app.use(cors());

app.use(express.json({limit:"24mb"}))


app.use('/api', routes);


const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});