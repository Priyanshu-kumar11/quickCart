import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        setError("Error fetching products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
