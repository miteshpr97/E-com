import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero'
import StatCard from '../../components/StatCard'
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Categories';



const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products?limit=12'); 
            const jsonData = await response.json();
            console.log(jsonData, "data")
            setProducts(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchProducts();
      }, []);

    
    return (
        <>
            <Hero />
            <Categories />

            <div className="flex flex-col text-center w-full ">
                <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
            </div>
            {
                products.length > 0 ?
                <ProductCard products = {products} />
                :
                <div> Loding ... </div>
            }

            {/* <Products /> */}
          
            <StatCard />


        </>
    )
}

export default Home
