import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h2>QuickCart</h2>
          <p>Your one-stop destination for quick and easy shopping.</p>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/map">Map</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@quickcart.com</p>
          <p>Phone: +91 ********</p>
          <p>Location: New Delhi, India</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-icons">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 QuickCart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
