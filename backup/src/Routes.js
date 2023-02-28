import React, {useEffect,useState} from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import About from './components/About';
import Cart from './components/Cart';
import Admin from './components/Admin';
import Login from './components/Login';
import ProductCard from './components/ProductCard';
import App from './App';
import MyContext from "./MyContext";


function RoutesApp() {
const [allProducts, setAllProducts]=useState([])
const [productsData, setProductsData] = useState([]); 
const [categories, setCategories] = useState([]);
const [cartOpen,setCartOpen] = useState(false);
const [shoppingCart,setShoppingCart]=useState([])

  const fetchData = async () => {
    const response = await fetch('http://localhost:8000/api/products');
    // const response = await fetch('https://gocodeprojectdeploy.onrender.com/api/products');

    ///api/products
    const data = await response.json();
    setProductsData(data);
    setAllProducts(data)
    console.log(data);
    setCategories(data.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index));
  }

    useEffect(() => {
      fetchData();
      },[])

      useEffect(()=>{console.log(shoppingCart)},[shoppingCart])
    const onClose=()=>{
      setCartOpen(false)
    }
    
    const onRemoveOne= (id, setFunc) =>{
      const productExist=shoppingCart.find((i) => i._id === id)
      if(productExist?.quantity === 1){
        setShoppingCart(shoppingCart.filter((i)=>i._id!==id)) 
        setFunc(true)    
      }else{
        setShoppingCart(shoppingCart.map((i)=>i._id===id ? {...productExist, quantity:productExist.quantity-1} : i ));
        setProductsData(productsData.map((i)=>i._id===id ? {...productExist, quantity:productExist.quantity-1} : i ))
      }
      }


      const onAdd=(id, setFunc, title='', price=0, imgUrl='')=>{
        const productExist=shoppingCart.find((i) => i._id === id)
        console.log(productExist);
        if(productExist){
          setShoppingCart(shoppingCart.map((i)=>i._id===id ? {...productExist, quantity:productExist.quantity+1} : i))
          setProductsData(productsData.map((i)=>i._id===id ? {...productExist, quantity:productExist.quantity+1} : i))
        }
        else{
            const newItem={_id:id, quantity: 1, title, price, img:imgUrl}
            setShoppingCart([...shoppingCart, newItem])
            const chosenProductIndex = productsData.findIndex(p => p._id === id)
            const productsDataClone = [...productsData]
            productsDataClone[chosenProductIndex].quantity = 1
            setProductsData(productsDataClone)
    
        }
        setFunc(false)
    
    }

  return (
    <BrowserRouter>
        <MyContext.Provider value={{onRemoveOne, onAdd, cartOpen,setCartOpen,productsData, setProductsData, categories, allProducts,shoppingCart,setShoppingCart,onClose}}>
            <Routes>
                <Route path='/' element = {<App />} />
                <Route path='products/:productId' element = {<ProductCard />} />
                <Route path='about' element = {<About />} />
                <Route path='cart' element = {<Cart />} />
                <Route path='admin/:userName' element ={<Admin />} />
                <Route path='login' element ={<Login />} />
            </Routes>
        </MyContext.Provider>
    </BrowserRouter>
    )
}

export default RoutesApp