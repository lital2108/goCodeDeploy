    import { addProductService, addProductsService, getAllProductsService, getProductsByCategoryService, filterProductsByPriceService, findProductAndUpdateService, deleteAProductService } from "../services/Product.js";

    export const addProductController = async (req, res) => {
        try{
          const product = { ...req.body };
          const createProduct = addProductService(product)
          await createProduct.save()
          res.send(createProduct);
      
        }catch(e){
          console.log(e.message)
          res.status(500).send(e.message)
        }
      }

    export const addProductsController = async (req,res) => {
        const products = [...req.body]
        const insertedProducts = await addProductsService(products)
        res.send(insertedProducts)
      }

    export const getAllProductsController = async (req,res) => {
        try{
            const products = await getAllProductsService()
            res.send(products)
        }catch(e){
            console.log(e.message)
        }
      }

      export const getProductsByCategoryController = async (req,res) => {
        try{
            const {categoryName} =  req.params
            const products = await getProductsByCategoryService(categoryName)
            res.send(products)
        }catch(e){
            console.log(e.message)
        }
      }

    export const filterProductsByPriceController = async (req,res) => {
        try{
            const query = req.query
            const filteredProducts = await filterProductsByPriceService(query)
            res.send(filteredProducts)
        }catch(e){
            console.log(e.message)
        }
      }

    export const findProductAndUpdateController = async (req, res) => {
        try {
          const {id} = req.params;
          const updatedProductData = req.body;
          const updatedProduct = await findProductAndUpdateService(id,updatedProductData);
          if (!updatedProduct) {
            return res.status(404).send("Product not found");
          }
          res.send(updatedProduct);
        } catch (e) {
          console.log(e.message);
          res.status(400).send("Invalid data");
        }
      }

    export const deleteAProductController = async (req, res) => {
        try {
          const productId = req.params.id;
          const deletedProduct = await deleteAProductService(productId);
          if (!deletedProduct) {
            return res.status(404).send("Product not found");
          }
          res.send(deletedProduct);
        } catch (e) {
          console.log(e.message);
          res.status(400).send("Invalid data");
        }
      }