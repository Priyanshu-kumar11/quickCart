import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../contextApi/CartContext'; 
import { useAuth } from '../../contextApi/AuthContext';  // ✅ Import Auth Context

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();  // ✅ Get login state & logout function

  return (
    <div className='navbar'>
      <NavLink to="/" className="nav-link logo">QuickCart</NavLink>
      <div className='nav-links'>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/map" className="nav-link">Map</NavLink>
        <NavLink to="/cart" className="nav-link">
          Cart ({cart.length})
        </NavLink>
        <NavLink to="/products/1" className="nav-link">Products</NavLink>
        
        {/* ✅ Show Logout if logged in, otherwise show Login */}
        {user ? (
          <button className="nav-link logout-btn" onClick={logout}>Logout</button>
        ) : (
          <NavLink to="/login" className="nav-link">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
