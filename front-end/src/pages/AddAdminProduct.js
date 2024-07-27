import React, { useState } from "react";

export default function AddAdminProduct() {
  const [error,setError]=useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [owner, setOwner] = useState("");
  const [ownerCountry, setOwnerCountry] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");
  const [description, setDescription] = useState("");
  const [showImage,setShowImage]=useState(null);
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setShowImage(URL.createObjectURL(file));
      setSelectedImage(file);
    }
  };

  const handleSubmit=async ()=>{
    if(!selectedImage || !productName || !category || !price || !owner ||!ownerCountry || !ownerAddress || !description){
      setError(true);
      return;
    }


    const formData = new FormData();

  // Append JSON data to FormData
  formData.append('productName', productName);
  formData.append('category', category);
  formData.append('price', price);
  formData.append('owner', owner);
  formData.append('ownerCountry', ownerCountry);
  formData.append('ownerAddress', ownerAddress);
  formData.append('description', description);

  // Append the selected image file to FormData
  formData.append('image', selectedImage);



    let result=await fetch('http://localhost:4500/addAdminProduct',{
      method:'post',
      body:formData,
    })
    
    result=await result.json();
    if(result.productName){
      alert('admin product added');
      setSelectedImage("")
      setProductName("");
      setCategory("");
      setPrice("");
      setOwner("");
      setOwnerCountry("");
      setOwnerAddress("");
      setDescription("");
      setShowImage(null);
    }
    else{
      alert('admin product not added');
    }
  }
  return (
    <div className="addAdminProduct">
      <h1>Add Product Page</h1>
      <input
        type="text"
        value={productName}
        placeholder="enter product name"
        onChange={(e) => {
          setProductName(e.target.value);
        }}
      />
      {error && !productName && <span>enter a valid product name</span>}
      <input
        type="text"
        value={category}
        placeholder="enter product category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      {error && !category && <span>enter a valid category</span>}
      <input
        type="number"
        value={price}
        placeholder="enter product price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error && !price && <span>enter a valid price</span>}
      <input
        type="text"
        value={owner}
        placeholder="enter owner name"
        onChange={(e) => {
          setOwner(e.target.value);
        }}
      />
      {error && !owner && <span>enter a valid owner</span>}
      <input
        type="text"
        value={ownerCountry}
        placeholder="enter owner country"
        onChange={(e) => {
          setOwnerCountry(e.target.value);
        }}
      />
      {error && !ownerCountry && <span>enter a valid owner country</span>}
      <input
        type="text"
        value={ownerAddress}
        placeholder="enter owner address"
        onChange={(e) => {
          setOwnerAddress(e.target.value);
        }}
      />
      {error && !ownerAddress && <span>enter a valid address</span>}
      <input className='input-file' type="file" onChange={handleImage} />
      {error && !selectedImage && <span>enter a valid image</span>}
      {showImage && (
        <img
          src={showImage}
          alt="product_image"
          style={{ maxWidth: "300px" }}
        />
      )}

      <textarea
        value={description}
        cols="75"
        rows="10"
        placeholder="enter description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      {error && !description && <span>enter a valid description</span>}
      <button className="addAdminProduct-btn" onClick={handleSubmit}>Submit</button>

    </div>
  );
}
