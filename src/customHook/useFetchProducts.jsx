import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios.get('https://fakestoreapi.com/products')
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Error fetching products.");
          setLoading(false);
        });
    }, 2000);
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
