import React from 'react'
import { useLocation } from 'react-router-dom'
import ProductsListings from '../components/Products-listings'
//this searchs the new url using the location
const useQuery=()=>{
  return new URLSearchParams(useLocation().search);
}

const Products = () => {
  const query=useQuery();
  const searchTerm=query.get("search") || "";
  return (
    <div className='mt-20'>
     <div className="text-center bg-white py-10 shadow-md">
  <h1 className="text-4xl font-bold text-gray-700">Products</h1>
  <p className="text-gray-500 mt-2 italic">"Every product tells a story—make it yours."</p>
  <p className="text-gray-600 mt-1">Explore our top selections, specially chosen just for you.</p>
</div>
    <div>
         <ProductsListings searchTerm={searchTerm}/>
    </div>
    </div>
  )
}

export default Products