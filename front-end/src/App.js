import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'; // Adjust the path based on your folder structure
import Signup from './components/Signup'; // Adjust the path based on your folder structure
import Login from './components/Login'; // Adjust the path based on your folder structure
import Products from './components/Products'; // Adjust the path based on your folder structure
import PrivateComponent from './components/PrivateComponent'; // Adjust the path based on your folder structure
import AddAdminProduct from './components/AddAdminProduct'; // Adjust the path based on your folder structure
import AdminProducts from './components/AdminProducts'; // Adjust the path based on your folder structure
import AddToCart from './components/AddToCart'; // Adjust the path based on your folder structure

import { emojiCursor } from "cursor-effects";
new emojiCursor({ emoji: ["🔥", "🐬", "🦆"] });



function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<PrivateComponent />}
          >
            <Route path="/products" element={<Products />} />
            <Route path="/AdminProducts" element={<AdminProducts />} />
            <Route path="/AddAdminProduct" element={<AddAdminProduct />} />
            <Route path="/addToCart" element={<AddToCart />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
