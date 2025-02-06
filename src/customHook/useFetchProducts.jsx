import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = (id = null) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data using async/await
    const fetchData = async () => {
      setLoading(true);  
      try {
        let response;
        if (id) {
        
          response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setProduct(response.data);
        } else {
          
          response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
        }
      } catch (error) {
       
        setError("Error fetching data.");
        console.error("Error fetching data:", error);
      } finally {
       
        setLoading(false);
      }
    };

    fetchData(); 

   
  }, [id]);

  return { products, product, loading, error };
};

export default useFetchProducts;
