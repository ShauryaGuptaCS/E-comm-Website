import React, { useEffect, useState } from 'react'

export default function Card(props) {
  
  const [addDisable,setAddDisable]=useState('');
  const [removeDisable,setRemoveDisable]=useState('disabled');
  useEffect(()=>{
    disableButton();
  },[])
  const disableButton=async()=>{
    const key=props._id;
    let result = await fetch(`http://localhost:4500/checkProduct/${key}`);
    result=await result.json();
    if(result.productId){
      setAddDisable('disabled');
      setRemoveDisable('');
    }
  }
  const handleAdd=async()=>{
    const category=props.category;
    const description=props.description;
    const imageUrl=props.imageUrl;
    const owner=props.owner;
    const ownerAddress=props.ownerAddress;
    const ownerCountry=props.ownerCountry;
    const price=props.price;
    const productName=props.productName;
    const productId=props._id;
    let result=await fetch('http://localhost:4500/products',{
      method:'post',
      body:JSON.stringify({category,description,imageUrl,owner,ownerAddress,ownerCountry,price,productName,productId}),
      headers:{
        'Content-type':'application/json'
      }
    })
    result=await result.json();
    console.log(result);
    if(result.productId){
      alert('data added successfully');
      setAddDisable('disabled');
      setRemoveDisable('');
    }
    else{
      alert('data not added successfully');
    }
  }
  const handleRemove=async()=>{
    const key=props._id;
    let result = await fetch(`http://localhost:4500/deleteProduct/${key}`,{
      method:'delete'
    });
    result=await result.json();
    console.log(result);
    if(result.deletedCount === 1){
      alert('product is removed');
      setAddDisable('');
      setRemoveDisable('disabled');
    }
    else{
      alert('product is not deleted');
    }
  }
  return (
      <div className='cards'>
        
        <img src={`http://localhost:4500${props.imageUrl}`}
        alt="product_image" 
        style={{
        width:"35%",
        height:"296px",
        objectFit:"cover",
        paddingLeft:"1%"
        }}
        />
        
        <div className="card-div">
          
          <table>   
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
              <tr>
              <td><button  style={{backgroundColor:'blue',color:'white'}} onClick={handleAdd} className='addBtn' disabled={addDisable}>ADD</button> </td> 
              <td><button  style={{backgroundColor:'blue',color:'white'}} onClick={handleRemove} className='removeBtn' disabled={removeDisable}>REMOVE</button></td>
            
              </tr>
            </tbody>

          
          </table>
          </div>
          
          
            
      
          
      </div>
  )
}
