import express, { query } from "express";
import mongoose from 'mongoose'
import  dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const {PORT,DB_USER,DB_PASS,DB_HOST,DB_NAME}=process.env

const app = express();
app.use(express.json());
app.use(express.static("backup/build"))
app.use(cors())
mongoose.set('strictQuery', true)

const productSchema = new mongoose.Schema({
    price:{
      type: Number,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    img:{
      type:String,
      required:false
    },
    dateCreated:{
      type:Date,
      default:Date.now()
    },
    category:{
      type:String, 
      required:true
    } 
  })
  const Product = mongoose.model('Product', productSchema)

  ///adding many products
  app.post('/api/products/addProducts', async (req,res) => {
  const products = [...req.body]
  const insertedProducts = await Product.insertMany(products)
  res.send(insertedProducts)
})
 ///adding a single product
  app.post("/api/products/addProduct", async (req, res) => {
    try{
      const product = { ...req.body };
      const createProduct = new Product(product)
      await createProduct.save()
      res.send(createProduct);
  
    }catch(e){
      console.log(e.message)
      res.status(500).send(e.message)
    }
  });
 ///getting all products
  app.get("/api/products", async (req,res) => {
    try{
        const products = await Product.find({})
        res.send(products)
    }catch(e){
        console.log(e.message)
    }
  })
 ///getting products by category
  app.get("/api/productByCategory/:categoryName", async (req,res) => {
    try{
        var {categoryName} =  req.params
        const products = await Product.find({category: categoryName})
        res.send(products)
    }catch(e){
        console.log(e.message)
    }
  })
 ///filtering products by price
  app.get("/api/products/filterByPrice", async (req,res) => {
    try{
        const query = req.query
        const filteredProducts = await Product.find({price: {$lt: query.lt, $gt:query.gt}})
        res.send(filteredProducts)
    }catch(e){
        console.log(e.message)
    }
  })
 ///updating a product
 app.put("/api/products/updateAProduct/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const updatedProductData = req.body;
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      updatedProductData,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }
    res.send(updatedProduct);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Invalid data");
  }
});
///deleting a product
app.delete("/api/products/deleteAProduct/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findOneAndRemove({ _id: productId });
    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }
    res.send(deletedProduct);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Invalid data");
  }
});

  app.get("*",(req,res)=>{
    res.sendFile(__dirname + "/backup/build/index.html")
  })
  mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      app.listen(PORT || 8000, () => {
        console.log("err", err);
        console.log("Ani maazin!");
      });
    }
  );
// mongoose.connect("mongodb://127.0.0.1:27017/products", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });

// app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}!`);
//   });