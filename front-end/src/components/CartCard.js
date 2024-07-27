import React from 'react';
import { useCart } from '../context/cart.context';


export default function CartsCard(props) {
 

  const { addCartItem} = useCart();

  
  const handleAddToCart = () => {
    addCartItem(props.element)
  };

  const handleDeleteCart =  () => {
    
  };

  return (
    <div className='product-card'>
      {props.element && (
        <>
          <img src={`${process.env.REACT_APP_API_URL}${props.element.imageUrl}`} alt={props.element.productName} />
          <div className='card-content'>
            <h1>{props.element.productName} | Price: {props.element.price}₹</h1>
            <p>Quantity : {props.element.quantity} || Total Price : {props.element.quantity * props.element.price}</p>
            <button onClick={handleAddToCart} className="product-card-btn">Add To Cart</button>
            <button onClick={handleDeleteCart} className="product-card-btn">Delete Cart</button>
          </div>
        </>
      )}
    </div>
  );
}
