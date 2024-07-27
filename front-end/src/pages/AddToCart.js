import React, { useEffect, useState } from 'react';
import { useCart } from '../context/cart.context';
import CartCard from '../components/CartCard';
import AlertBox from '../components/AlertBox';

export default function AddToCart(props) {
  
  const [buyValue , setBuyValue] = useState(0)
  const [alertBox , setAlertBox] = useState(false)

  const {cartItems} = useCart();
  useEffect(()=>{
    let tempBuyValue =  0
    cartItems.forEach((item)=>{
      tempBuyValue += item.price * item.quantity
    })
    setBuyValue(tempBuyValue)
  },[cartItems])
  

  const handleBuy = ()=>{
    setAlertBox(true);
  }
  const handleOnClose = ()=>{
    setAlertBox(false);
  }
  
  return (
    <div>
      <div className="products">
      {cartItems.map((element,index) => (
        <CartCard key={element._id} element = {element}  />
      ))}

      <button onClick={handleBuy} className='addToCart-btn' >Buy Now ({buyValue})</button>
      {alertBox && <AlertBox  message={`Pay ${buyValue}₹`} onClose={handleOnClose}/>}
      </div>
    </div>
  );
}
