import './Drawer.css'
import React, { useState,useContext, useEffect } from 'react'
import Drawer from '@mui/material/Drawer'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MyContext from "../MyContext";
import Item from './Item';
import {useNavigate} from 'react-router-dom';


export default function CartDrawer({open,onClose}) {
  const[amount,setAmount] = useState(0)
    const { shoppingCart } = useContext(MyContext);
    const navigate = useNavigate();

    const goToCart=()=>{
      navigate(`cart`)
    }

    useEffect(()=>{
      let costs = 0
      shoppingCart.forEach(item => { costs += parseFloat(item.price)*parseFloat(item.quantity)})
      setAmount(costs)
    },[shoppingCart])
    
    return (
      <div >
            <Drawer anchor={'right'} open={open} PaperProps={{ style: { width: '50%' } }}>
                <p className='cart'>Your Cart <ShoppingBasketIcon color='primary' fontSize='30em'/></p>
                <div className="items">
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
              <div className='amount'>Total Amount: {amount}</div>
              <div className='buttonsDrawer'>
                <button className='button-71' onClick={onClose}>Continue Shopping</button>
                <button className='button-71' onClick={goToCart}>Go To Cart</button>
              </div>
            </Drawer>        
      </div>
    );
  }



