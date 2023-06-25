import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard'
import Categories from '../../components/Categories'



const Products = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const jsonData = await response.json();
        console.log(jsonData, "single data");
        setProduct(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProduct();
  }, [])



  return (
    <div>
      <Categories />

      <div className="flex flex-col text-center w-full ">
        <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
      </div>




      {
        product.length > 0 ?
          <ProductCard products={product} />
          :
          <div> loding</div>
      }
    </div>
  )

}

export default Products
