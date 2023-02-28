import React, { useContext } from 'react'
import MyContext from "../MyContext";
import Item from './Item';
import "./Cart.css"
const Cart = () => {
  const { shoppingCart } = useContext(MyContext);
  return(
    <div>
      <h1 className='cart'>Your Shopping Cart</h1>
      {shoppingCart.map((item)=>{
        return(
          <Item 
            key={item._id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            id={item._id}
            amount={item.price*item.quantity}
            imgUrl={item.imgUrl}
            />
        )
      })}
    </div>
    )}

export default Cart