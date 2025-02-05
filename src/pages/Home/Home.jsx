import React, { useState } from 'react';
import './Home.css';
import useFetchProducts from '../../customHook/useFetchProducts'; 
import { useCart } from '../../contextApi/CartContext'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { products, loading, error } = useFetchProducts(); 
  const { cart, addToCart, removeFromCart } = useCart(); 
  const navigate = useNavigate();                                       

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    : products;

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="home-container">
      <h1>Product List</h1>

   
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a Category</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

     
      {loading ? (
        <p className="loading">Loading products...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : filteredProducts.length === 0 ? (
        <p className="no-products">No products found for this category.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <h1>{product.title}</h1>
              <p>💲{product.price}</p>
              <img src={product.image} alt={product.title} />
              <h2>Category: {product.category}</h2>

              {/* Add/Remove buttons */}
              {!cart.some((item) => item.id === product.id) && (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              )}

              {/* Show 'Go to Cart' button when item is already in the cart */}
              {cart.some((item) => item.id === product.id) && (
                <button onClick={() => navigate('/cart')}>Go to Cart</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
