import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../contextApi/CartContext'; 

const Navbar = () => {
  const { cart } = useCart(); 

  return (
    <div className='navbar'>
      <NavLink to="/" className="nav-link logo">QuickCart</NavLink>
      <div className='nav-links'>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/map" className="nav-link">Map</NavLink>
        <NavLink to="/cart" className="nav-link">
          Cart ({cart.length})
        </NavLink>
        <NavLink to="/users/1" className="nav-link">User Profile</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
