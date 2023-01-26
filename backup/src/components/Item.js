import React from 'react'
import './Item.css'
import { useContext } from "react";
import MyContext from "../MyContext";

const Item = ({title,quantity,id,amount}) => {
    const {onAdd,onRemoveOne,setAddButton } = useContext(MyContext);
  
    return(
        <div>

          <div className='item-card'>
            <br></br>
            <span>{title}</span>
            <br></br>
            <div>
              <div className='amountInDrawer' marging='left'>
                <button className='button-remove' onClick={()=> onRemoveOne(id, setAddButton)} cursor='pointer'>-</button>
                <span className='qnty'>{quantity} in cart</span>
                <button className='button-add' onClick={()=>onAdd(id,setAddButton)} cursor='pointer'>+</button>
              </div>            
            </div>
            <br></br>
            <span>Price: {amount}$</span>
          </div>


        </div>
      );
}
export default Item