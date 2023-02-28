import express, { query } from "express";
import mongoose from 'mongoose'
import  dotenv from 'dotenv'
import cors from 'cors'
import { addProductController, addProductsController, getAllProductsController, getProductsByCategoryController, filterProductsByPriceController,findProductAndUpdateController,deleteAProductController } from "./controllers/Product.js";
dotenv.config()
const {PORT,DB_USER,DB_PASS,DB_HOST,DB_NAME}=process.env

const app = express();
app.use(express.json());
app.use(express.static("backup/build"))
app.use(cors())
mongoose.set('strictQuery', true)


  ///adding many products
  app.post('/api/products/addProducts', addProductsController )
 ///adding a single product
  app.post("/api/products/addProduct", addProductController )
 ///getting all products
  app.get("/api/products", getAllProductsController )
 ///getting products by category
  app.get("/api/productByCategory/:categoryName", getProductsByCategoryController )
 ///filtering products by price
  app.get("/api/products/filterByPrice", filterProductsByPriceController )
 ///updating a product
 app.put("/api/products/updateAProduct/:id" , findProductAndUpdateController);
///deleting a product
app.delete("/api/products/deleteAProduct/:id", deleteAProductController );

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