import React from 'react'

export default function ProductsCard(props) {
  const handleAddToCart=()=>{

  }
  const handleBuy=()=>{

  }
  return (
    // <div className='cards'>
        
    //     <img src={`${process.env.REACT_APP_API_URL}${props.imageUrl}`}
    //     alt="product_image" 
    //     style={{
    //     width:"35%",
    //     height:"296px",
    //     objectFit:"cover",
    //     paddingLeft:"1%"
    //     }}
    //     />
        
    //     <div className="card-div">
          
    //       <table>   
    //         <tbody>
    //           <tr>
    //             <td><b>Product Name</b></td>
    //             <td>{`${props.productName}`}</td>
    //           </tr>
    //           <tr>
    //             <td><b>Price</b></td>
    //             <td>{`${props.price}`}</td>
    //           </tr>
    //           <tr>
    //             <td><b>Category</b></td>
    //             <td>{`${props.category}`}</td>
    //           </tr>
    //           <tr>
    //             <td><b>Price</b></td>
    //             <td>{`${props.price}`}</td>
    //           </tr>
    //           <tr>
    //             <td><b>Owner</b></td>
    //             <td>{`${props.owner}`}</td>
    //           </tr>
    //           <tr>
    //             <td><b>Owner Country</b></td>
    //             <td>{`${props.ownerCountry}`}</td>
    //           </tr>
    //           <tr>
    //             <td><b>Owner Address</b></td>
    //             <td>{`${props.ownerAddress}`}</td>
    //           </tr>
    //           <tr>
    //             <td><b>Description</b></td>
    //             <td>{`${props.description}`}</td>
    //           </tr>
    //           <tr>
    //             <td><button  onClick={handleAddToCart} >Add To Cart</button></td>  
    //             <td><button  onClick={handleBuy} >Buy</button></td>
            
    //           </tr>
    //         </tbody>

          
    //       </table>
    //       </div>
          
          
            
      
          
    //   </div>
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
