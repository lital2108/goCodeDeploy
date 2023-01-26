import './App.css';
import Header from './components/Header'
import Products from './components/Products';
import MyContext from "./MyContext";
import { useContext } from "react";
import CartDrawer from './components/Drawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
 
function App() {
  const { onClose,cartOpen,setCartOpen } = useContext(MyContext);
  return (
    
        <div className="App">
          <div className='stickyHeader'>
            <CartDrawer onClose={onClose} open={cartOpen}></CartDrawer>
            <IconButton size="large"  className='iconButton'  onClick={()=>setCartOpen(true)} title='Shopping Cart' color="primary" aria-label="shopping cart" >
               <ShoppingCartIcon style={{height:'50px', width:'50px'}} />
            </IconButton>           
            <Header/>
            </div>
          <div className='products'>
            <Products/>
          </div>
        </div>
  );
}

export default App;
