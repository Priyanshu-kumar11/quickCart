import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchProducts from '../../customHook/useFetchProducts'; 
import './UserProfile.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchProducts(id); // Fetch individual product based on ID

  if (loading) {
    return <p>Loading product data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
};

export default ProductDetails;
