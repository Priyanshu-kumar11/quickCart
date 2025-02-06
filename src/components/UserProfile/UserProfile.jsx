import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfile.css';  // Update CSS file if necessary

const ProductDetails = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const [product, setProduct] = useState(null); // State to store product data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Declare an async function to fetch product data
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`); // Using the correct API endpoint
        setProduct(response.data); // Store the product data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError("Error fetching product data."); // Set error message
        setLoading(false); // Set loading to false if there's an error
        console.error(error); // Log the actual error to console for debugging
      }
    };

    fetchProductData(); // Call the async function

  }, [id]); // Re-fetch data if the 'id' changes

  if (loading) {
    return <p>Loading product data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1> {/* Display product title */}
      <p><strong>Description:</strong> {product.description}</p> {/* Display product description */}
      <p><strong>Price:</strong> ${product.price}</p> {/* Display product price */}
      <p><strong>Category:</strong> {product.category}</p> {/* Display product category */}
      <img src={product.image} alt={product.title} /> {/* Display product image */}
      {/* Add more product details if needed */}
    </div>
  );
};

export default ProductDetails;
