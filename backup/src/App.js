import './App.css';
import Header from './components/Header'
import Products from './components/Products';
import MyContext from "./MyContext";
import { useContext } from "react";
import CartDrawer from './components/Drawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const { onClose, cartOpen, setCartOpen } = useContext(MyContext);
  return (
    
        <div className="App">
          <div className=''>
            <CartDrawer onClose={onClose} open={cartOpen}></CartDrawer>
            <IconButton size="large"  className='iconButton'  onClick={()=>setCartOpen(true)} title='Shopping Cart' color="primary" aria-label="shopping cart" >
               <ShoppingCartIcon style={{height:'50px', width:'50px'}} />
            </IconButton>  
            <div className='admin' >
              <button className='button-47' onClick={()=>{navigate('login')}}>Admin Login</button>
            </div>         
            <Header/>
            </div>
          <div className='products'>
            <Products/>
          </div>
        </div>
  );
}

export default App;
