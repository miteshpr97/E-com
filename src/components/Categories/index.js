import React, { useEffect, useState } from 'react';
import FeaturesCard from '../FeatureCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products/categories'); 
            const jsonData = await response.json();
            setCategories(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchCategories();
      }, []);
      

      if(categories.length ===0) return <div> loading....</div>

  return (
   <div>
    <FeaturesCard  cards = {categories}/>
   </div>
  )
}

export default Categories
