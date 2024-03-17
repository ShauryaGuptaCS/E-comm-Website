import React from 'react'

export default function ProductsCard(props) {
  const handleAddToCart=()=>{

  }
  const handleBuy=()=>{

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
