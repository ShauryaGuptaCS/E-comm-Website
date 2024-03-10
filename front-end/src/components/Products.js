import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let result = await fetch("http://localhost:4500/displayProducts");
    result = await result.json();
    if (result) {
      setProducts(result);
    }
  };
  return (
    <div>
      <div className="products">
      {products.map((element,index) => (
        <ProductsCard key={element._id} {...element} />
      ))}

      </div>
      
    </div>
  );
}
