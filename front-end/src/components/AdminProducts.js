import React, { useEffect, useState } from "react";
import Card from "./Card";
export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();

  }, []);
  
  const getData = async () => {

    let result = await fetch("http://localhost:4500/displayAdmin");
    result = await result.json();
    if (result) {
      setProducts(result);
    }
  };
  return (
    <div>
      <div className="adminProducts">
      {products.map((element,index) => (
        <Card key={element._id} {...element} />
      ))}

      </div>
      
    </div>
  );
}
