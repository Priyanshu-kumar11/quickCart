import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../contextApi/CartContext'; 

const Navbar = () => {
  const { cart } = useCart(); // Get cart from context

  return (
    <div className='navbar'>
      <NavLink to="/" className="nav-link logo">QuickCart</NavLink>
      <div className='nav-links'>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/map" className="nav-link">Map</NavLink>
        <NavLink to="/cart" className="nav-link">
          Cart ({cart.length})
        </NavLink>
        <NavLink to="/user/1" className="nav-link">User Profile</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
