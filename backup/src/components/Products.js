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
              key={product.id}
              imgUrl={product.image}
              title={product.title}
              price={product.price}
              id={product.id}
              quantity={product.quantity >= 0 ? product.quantity : 0}
              />
          )
        })}

      </section>
    );
      }

    export default Products;