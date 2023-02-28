import Product from'./Product.js'
import './Products.css'
import { useContext } from "react";
import MyContext from "../MyContext";


const Products = () => {
  const {productsData} = useContext(MyContext);
    return(
      <section className="products">
        {productsData.map((product)=>{
          return(
            <Product 
              key={product._id}
              imgUrl={product.img}
              title={product.title}
              price={product.price}
              id={product._id}
              quantity={product.quantity >= 0 ? product.quantity : 0}
              />
              
          )
          
        })}
      </section>
    );
      }

    export default Products;