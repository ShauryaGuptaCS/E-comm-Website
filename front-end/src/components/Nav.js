import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/products");
  };
  let navContent;
  const [isMenuOpen,setIsMenuOpen]=useState(false);

  const handleHamburger=()=>{
    
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
    
  }

  if (!auth) {
    navContent = (
      <div className="nav">
        <h1>StyleHub</h1>
        <div className="nav-div">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
        <div onClick={handleHamburger} className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`hamburger-open ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
        </div>
      </div>
    );
  } else if (JSON.parse(auth).username === "admin") {
    navContent = (
      <div className="nav">
        <h1>StyleHub</h1>
        <div className="nav-div">
        <ul>
          <li>
            <NavLink to="/AddAdminProduct">Add Product</NavLink>
          </li>
          <li>
            <NavLink to="/AdminProducts">Admin Products</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/addToCart">Add To Cart</NavLink>
          </li>
          <li>
            <NavLink onClick={logout} to="/login">
              Logout({JSON.parse(auth).username})
            </NavLink>
          </li>
        </ul>
        <div onClick={handleHamburger} className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`hamburger-open ${isMenuOpen ? "open" : ""}`}>
          <ul>
          <li>
            <NavLink to="/AddAdminProduct">Add Product</NavLink>
          </li>
          <li>
            <NavLink to="/AdminProducts">Admin Products</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/addToCart">Add To Cart</NavLink>
          </li>
          <li>
            <NavLink onClick={logout} to="/login">
              Logout({JSON.parse(auth).username})
            </NavLink>
          </li>
          </ul>
        </div>
        </div>
      </div>
    );
  } else {
    navContent = (
      <div className="nav">
        <h1>StyleHub</h1>
        <div className="nav-div">
        <ul>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/addToCart">Add To Cart</NavLink>
          </li>
          <li>
            <NavLink onClick={logout} to="/login">
              Logout({JSON.parse(auth).username})
            </NavLink>
          </li>
        </ul>
        <div onClick={handleHamburger} className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`hamburger-open ${isMenuOpen ? "open" : ""}`}>
          <ul>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/addToCart">Add To Cart</NavLink>
          </li>
          <li>
            <NavLink onClick={logout} to="/login">
              Logout({JSON.parse(auth).username})
            </NavLink>
          </li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
  return <>
  {navContent}
  </>;
}
