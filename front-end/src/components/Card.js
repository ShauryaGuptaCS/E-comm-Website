import React, { useEffect, useState } from 'react'
import AlertBox from './AlertBox';

export default function Card(props) {
  
  const [addDisable,setAddDisable]=useState('');
  const [removeDisable,setRemoveDisable]=useState('disabled');
  const [alert,setAlert]=useState(false);
  const [alertMsg,setAlertMsg]=useState("");

  const handleOnClose=()=>{
    setAlert(false);
  }
  useEffect(()=>{
    disableButton();
  },[])
  const disableButton=async()=>{
    const key=props._id;
    let result = await fetch(`${process.env.REACT_APP_API_URL}/checkProduct/${key}`);
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
    let result=await fetch(`${process.env.REACT_APP_API_URL}/products`,{
      method:'post',
      body:JSON.stringify({category,description,imageUrl,owner,ownerAddress,ownerCountry,price,productName,productId}),
      headers:{
        'Content-type':'application/json'
      }
    })
    result=await result.json();
    console.log(result);
    if(result.productId){
      
      setAlert(true);
      setAlertMsg("data added successfully");
      setAddDisable('disabled');
      setRemoveDisable('');
    }
    else{
      setAlert(true);
      setAlertMsg("data not added successfully");
      
    }
  }
  const handleRemove=async()=>{
    const key=props._id;
    let result = await fetch(`${process.env.REACT_APP_API_URL}/deleteProduct/${key}`,{
      method:'delete'
    });
    result=await result.json();
    console.log(result);
    if(result.deletedCount === 1){
      
      setAlert(true);
      setAlertMsg("product is removed");
      setAddDisable('');
      setRemoveDisable('disabled');
    }
    else{
      setAlert(true);
      setAlertMsg("product is removed");
    }
  }
  return (
      // <div className='cards'>
        
      //   <img src={`${process.env.REACT_APP_API_URL}${props.imageUrl}`}
      //   alt="product_image" 
      //   style={{
      //   width:"35%",
      //   height:"296px",
      //   objectFit:"cover",
      //   paddingLeft:"1%"
      //   }}
      //   />
        
      //   <div className="card-div">
          
      //     <table>   
      //       <tbody>
      //         <tr>
      //           <td><b>Product Name</b></td>
      //           <td>{`${props.productName}`}</td>
      //         </tr>
      //         <tr>
      //           <td><b>Price</b></td>
      //           <td>{`${props.price}`}</td>
      //         </tr>
      //         <tr>
      //           <td><b>Category</b></td>
      //           <td>{`${props.category}`}</td>
      //         </tr>
      //         <tr>
      //           <td><b>Price</b></td>
      //           <td>{`${props.price}`}</td>
      //         </tr>
      //         <tr>
      //           <td><b>Owner</b></td>
      //           <td>{`${props.owner}`}</td>
      //         </tr>
      //         <tr>
      //           <td><b>Owner Country</b></td>
      //           <td>{`${props.ownerCountry}`}</td>
      //         </tr>
      //         <tr>
      //           <td><b>Owner Address</b></td>
      //           <td>{`${props.ownerAddress}`}</td>
      //         </tr>
      //         <tr>
      //           <td><b>Description</b></td>
      //           <td>{`${props.description}`}</td>
      //         </tr>
      //         <tr>
      //         <td><button   onClick={handleAdd} className='addBtn' disabled={addDisable}>ADD</button> </td> 
      //         <td><button   onClick={handleRemove} className='removeBtn' disabled={removeDisable}>REMOVE</button></td>
            
      //         </tr>
      //       </tbody>

          
      //     </table>
      //     </div>
          
          
            
      
          
      // </div>
      <>
      <div className='card'>
        <img src={`${process.env.REACT_APP_API_URL}${props.imageUrl}`} alt="clothes photo" />
        <div className='card-content'>
          <h1>{props.productName} | Price :- {props.price}$</h1>
          <button onClick={handleAdd} className="card-btn" disabled={addDisable}>Add</button>
          <button onClick={handleRemove} className="card-btn" disabled={removeDisable} >Remove</button>
        </div>
      </div>
      {alert && <AlertBox message={alertMsg} onClose={handleOnClose}/>}
      </>

  )
}
