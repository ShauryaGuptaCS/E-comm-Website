import React from 'react'
import { Table } from 'react-bootstrap'
export default function ProductsCard(props) {
  const handleAddToCart=()=>{

  }
  const handleBuy=()=>{

  }
  return (
    <div className='card'>
        <div className='card-img'>
        <img src={`http://localhost:4500${props.imageUrl}`}
        alt="product_image" 
        style={{
        width:"35%",
        height:"296px",
        objectFit:"cover",
        paddingLeft:"1%"
        }}
        />
        </div>
        <div className="card-div">
          
          <Table bordered striped hover>   
            <tbody>
              <tr>
                <td><b>Product Name</b></td>
                <td>{`${props.productName}`}</td>
              </tr>
              <tr>
                <td><b>Price</b></td>
                <td>{`${props.price}`}</td>
              </tr>
              <tr>
                <td><b>Category</b></td>
                <td>{`${props.category}`}</td>
              </tr>
              <tr>
                <td><b>Price</b></td>
                <td>{`${props.price}`}</td>
              </tr>
              <tr>
                <td><b>Owner</b></td>
                <td>{`${props.owner}`}</td>
              </tr>
              <tr>
                <td><b>Owner Country</b></td>
                <td>{`${props.ownerCountry}`}</td>
              </tr>
              <tr>
                <td><b>Owner Address</b></td>
                <td>{`${props.ownerAddress}`}</td>
              </tr>
              <tr>
                <td><b>Description</b></td>
                <td>{`${props.description}`}</td>
              </tr>
          
            </tbody>

          
          </Table>
          </div>
          <span>
          <button onClick={handleAddToCart} >Add To Cart</button>  
          <button onClick={handleBuy} >Buy</button>
            
          </span>
          
            
      
          
      </div>
  )
}
