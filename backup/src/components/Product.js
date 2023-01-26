import './Product.css'
import { useContext,useState } from "react";
import MyContext from "../MyContext";
import {useNavigate} from 'react-router-dom';



const Product=({imgUrl, title, price,id, quantity=0})=>{
  const navigate = useNavigate();
  const [ addButton, setAddButton ] = useState(true)
  const { shoppingCart, setShoppingCart, setProductsData, productsData, onRemoveOne, onAdd} = useContext(MyContext);


const onRemove= () =>{
  const productExistIndex=productsData.findIndex((i) => i.id === id)
  const productsClone = [...productsData]
  productsClone[productExistIndex].quantity = 0
  setProductsData(productsClone)
  setShoppingCart(shoppingCart.filter((i)=>i.id!==id))
  setAddButton(true)
}


    return(
      <div className="product-card">

        <div className="product-image">
          <img onClick={() => {navigate(`products/${id}`)}}  src={imgUrl} />
        </div>

        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}$</h6>
          { addButton ? 
          <button className='buttonAdd' title='Add' onClick={() => onAdd(id, setAddButton, title, price, imgUrl)}>Add To Cart</button> 
          : 
          <div>
            <div className='amountInDrawer' >
              <button className='button-remove'onClick={() => onRemoveOne(id, setAddButton)} cursor='pointer'>-</button>
              <span className='qnty'>{quantity} in cart</span>
              <button className='button-add' onClick={() => onAdd(id, setAddButton)} cursor='pointer'>+</button>
             </div>  
            <button className='buttonRemove'title='Remove' onClick={onRemove}>Remove Item</button>
          </div>
          }
        </div>
      </div>
    );
  }

  export default Product;