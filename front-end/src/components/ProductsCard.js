import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductsCard(props) {
  
  let auth=localStorage.getItem('user');
  auth=JSON.parse(auth);
    
  const handleAddToCart=()=>{
    console.log(props.productId);
    console.log(auth);
    const result=fetch(`${process.env.REACT_APP_API_URL}/carts/${auth}`,{
      
    })
    
  }
  const handleBuy=async ()=>{
    console.log(auth);
    
  }
  return (
    <>
    <div className='product-card'>
    <img src={`${process.env.REACT_APP_API_URL}${props.imageUrl}`} alt="clothes photo" />
        <div className='card-content'>
          <h1>{props.productName} | Price :- {props.price}$</h1>
          <button onClick={handleAddToCart} className="product-card-btn" >Add To Cart</button>
          <button onClick={handleBuy} className="product-card-btn"  >Buy Now</button>
          
        </div>
        
    </div>

    </>
  )
}
