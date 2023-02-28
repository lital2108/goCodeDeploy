
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCard = () => {
  const [chosenProduct, setChosenProduct] = useState({});
  const { productId } = useParams();

  const fetchSingleProduct = async () => {
    const response = await fetch(
      `http://localhost:8000/api/products/${productId}`
      // `http://fakestoreapi.com/products/${productId}`
    );
    const data = await response.json();
    setChosenProduct(data);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [productId]);


  return (
    <div className='product-card'>
      {chosenProduct && <div>
        <div className="product-info">
          <p>{chosenProduct.category}</p>
          <p>{chosenProduct.title}</p>
          <p>{chosenProduct.description}</p>
          <p>{chosenProduct.price}$</p>
        </div>
        <div className="product-image">
          <img alt="product" src={chosenProduct.image} />
        </div>
      </div>}
    </div>
  );
};

export default ProductCard;
