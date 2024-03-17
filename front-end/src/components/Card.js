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
