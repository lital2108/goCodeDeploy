import express, { query } from "express";
import mongoose from 'mongoose'
import  dotenv from 'dotenv'
dotenv.config()
const {PORT,DB_USER,DB_PASS,DB_HOST,DB_NAME}=process.env

const app = express();
app.use(express.json());
app.use(express.static("client/build"))

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
      required:true
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

  app.post('/api/products/addProducts', async (req,res) => {
  const products = [...req.body]
  const insertedProducts = await Product.insertMany(products)
  res.send(insertedProducts)
})
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

  app.get("/api/products", async (req,res) => {
    try{
        const products = await Product.find({})
        res.send(products)
    }catch(e){
        console.log(e.message)
    }
  })

  app.get("/api/productByCategory/:catName", async (req,res) => {
    try{
        var {catName} =  req.params
        const products = await Product.find({category: catName})
        res.send(products)
    }catch(e){
        console.log(e.message)
    }
  })

  app.get("/api/products/filterByPrice", async (req,res) => {
    try{
        const query = req.query
        const filteredProducts = await Product.find({price: {$lt: query.lt, $gt:query.gt}})
        res.send(filteredProducts)
    }catch(e){
        console.log(e.message)
    }
  })

  // app.put("/api/products/updateAProduct", async (req,res) => {
  //   try{
  //       const productId = req.params
  //       const productToUpdate = await Product.find({id: productId})
  //       res.send(filteredProducts)
  //   }catch(e){
  //       console.log(e.message)
  //   }
  // })

  app.get("*",(req,res)=>{
    res.sendFile(__dirname + "/client/build/index.html")
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