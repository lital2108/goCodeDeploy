import { Product } from "../models/Product.js";

// import (Product)
export const addProductService = (product) =>{
    return new Product(product)
}

export const addProductsService = (products) =>{
    return Product.insertMany(products)
}

export const getAllProductsService = () =>{
    return Product.find({})
}

export const getProductsByCategoryService = (categoryName) =>{
    return Product.find({category: categoryName})
}

export const filterProductsByPriceService = (query) =>{
    return Product.find({price: {$lt: query.lt, $gt:query.gt}})
}

export const findProductAndUpdateService = (id,updatedProductData) =>{
    return Product.findOneAndUpdate(
        { _id: id },
        updatedProductData,
        { new: true }
      );
}

export const deleteAProductService = (productId) =>{
    return Product.findOneAndRemove({ _id: productId });
}