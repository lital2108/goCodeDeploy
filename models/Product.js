import mongoose from "mongoose"

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
 export const Product = mongoose.model('Product', productSchema)
