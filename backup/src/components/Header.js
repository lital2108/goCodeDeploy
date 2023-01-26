
import Sort from'./Sort.js'
import './Header.css'

const Header=()=>{
    return(
      <nav className="product-filter">
        <h1>Online Shopping</h1>
        <Sort/>
    </nav>
    );
  }

  export default Header;