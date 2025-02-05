import React, { useState } from 'react';
import './Home.css';
import useFetchProducts from '../../customHook/useFetchProducts'; 
import { useCart } from '../../contextApi/CartContext'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    category: '',
    image: '',
  });
  const [formError, setFormError] = useState('');
  const { products, loading, error } = useFetchProducts(); 
  const { cart, addToCart, removeFromCart } = useCart(); 
  const navigate = useNavigate();

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    : products;

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle product form submission
  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    // Validate input
    if (!newProduct.title || !newProduct.price || !newProduct.category || !newProduct.image) {
      setFormError('All fields are required.');
      return;
    }

    if (isNaN(newProduct.price) || newProduct.price <= 0) {
      setFormError('Price must be a positive number.');
      return;
    }

    setFormError('');
    
    try {
      // Send the POST request to add the new product
      const response = await axios.post('https://fakestoreapi.com/products', newProduct);
      console.log('Product added:', response.data);
      // Optionally reset form
      setNewProduct({ title: '', price: '', category: '', image: '' });
    } catch (error) {
      setFormError('Failed to add the product.');
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="home-container">
      <h1>Product List</h1>

      {/* Category Filter */}
      <div className="category-filter">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select a Category</option>
          {/* Dynamically generate category options */}
          {Array.from(new Set(products.map((product) => product.category))).map((category) => (
            <option key={category} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Loading/Error Handling */}
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
              <h2>{product.title}</h2>
              <p>💲{product.price}</p>
              <img src={product.image} alt={product.title} />
              <p>Category: {product.category}</p>

              {/* Add/Remove buttons */}
              {!cart.some((item) => item.id === product.id) ? (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              ) : (
                <button onClick={() => navigate('/cart')}>Go to Cart</button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Form to add a new product */}
      <div className="add-product-form">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmitProduct}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
              placeholder="Product Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              placeholder="Product Price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              placeholder="Product Category"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
              placeholder="Product Image URL"
            />
          </div>
          {formError && <p className="error">{formError}</p>}
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
