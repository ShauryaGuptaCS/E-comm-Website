import React from 'react';
import { useCart } from '../context/cart.context';

export default function ProductsCard(props) {
  
 
  const {addCartItem , cartItems} = useCart();

  
  const handleAddToCart = () => {
    addCartItem(props.element)
    console.log(cartItems)
  };

  

  return (
    <div className='product-card'>
      {props.element && (
        <>
          <img src={`${process.env.REACT_APP_API_URL}${props.element.imageUrl}`} alt={props.element.productName} />
          <div className='card-content'>
            <h1>{props.element.productName} | Price: {props.element.price}₹</h1>
            <button onClick={handleAddToCart} className="product-card-btn">Add To Cart</button>
            
          </div>
        </>
      )}
    </div>
  );
}
