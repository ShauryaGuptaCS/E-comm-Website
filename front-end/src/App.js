import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'; // Adjust the path based on your folder structure
import Signup from './pages/Authentication/Signup'; // Adjust the path based on your folder structure
import Login from './pages/Authentication/Login'; // Adjust the path based on your folder structure
import Products from './pages/Products'; // Adjust the path based on your folder structure
import PrivateComponent from './components/PrivateComponent'; // Adjust the path based on your folder structure
import AddAdminProduct from './pages/AddAdminProduct'; // Adjust the path based on your folder structure
import AdminProducts from './pages/AdminProducts'; // Adjust the path based on your folder structure
import AddToCart from './pages/AddToCart'; // Adjust the path based on your folder structure
import Home from './pages/Authentication/Home';
import AlertBox from './components/AlertBox';
import { useCart , CartProvider } from './context/cart.context';




function App() {
  const {addCartItem , deleteCartItem , cartItems} = useCart();
  return (
    <CartProvider>
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
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/alert" element={<AlertBox/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
