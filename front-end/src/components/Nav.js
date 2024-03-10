import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/products");
  };
  let navContent;

  if (!auth) {
    navContent = (
      <ul className="nav">
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
  } else if (JSON.parse(auth).username === "admin") {
    navContent = (
      <ul className="nav">
        <li>
          <Link to="/AddAdminProduct">Add Product</Link>
        </li>
        <li>
          <Link to="/AdminProducts">Admin Products</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/addToCart">Add To Cart</Link>
        </li>
        <li>
          <Link onClick={logout} to="/login">
            Logout({JSON.parse(auth).username})
          </Link>
        </li>
      </ul>
    );
  } else {
    navContent = (
      <ul className="nav">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/addToCart">Add To Cart</Link>
        </li>
        <li>
          <Link onClick={logout} to="/login">
            Logout({JSON.parse(auth).username})
          </Link>
        </li>
      </ul>
    );
  }
  return <div>{navContent}</div>;
}
