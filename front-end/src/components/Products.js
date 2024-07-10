import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cartItem,setCartItems]=useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let result = await fetch(`${process.env.REACT_APP_API_URL}/displayProducts`);
    result = await result.json();
    if (result) {
      setProducts(result);
    }
  };
  return (
    <div>
      <div className="products">
      {products.map((element,index) => (
        <ProductsCard key={element._id} {...element} cartItem={cartItem} setCartItems={setCartItems} />
      ))}

      </div>
      
    </div>
  );
}
