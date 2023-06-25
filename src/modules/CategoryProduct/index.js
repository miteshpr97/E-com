import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard';

const CategoryProduct = () => {
    const {name} = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`); 
            const jsonData = await response.json();
            setProducts(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchProducts();
      }, []);



if(products.length ===0) return <div>loding...</div>

  return (

        <ProductCard products = {products} />
      
    
  )
}

export default CategoryProduct
