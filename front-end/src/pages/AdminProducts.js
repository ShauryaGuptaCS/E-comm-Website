import React, { useEffect, useState } from "react";
import Card from "../components/Card";
export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();

  }, []);
  
  const handleRemove = (id) => {
    setProducts(products.filter(product => product._id !== id));
  };

  const getData = async () => {

    let result = await fetch(`${process.env.REACT_APP_API_URL}/displayAdmin`);
    result = await result.json();
    if (result) {
      setProducts(result);
    }
  };
  return (
    <div>
      <div className="adminProducts">
      {products.map((element,index) => (
        <Card key={element._id} {...element} onRemove={handleRemove} />
      ))}

      </div>
      
    </div>
  );
}
