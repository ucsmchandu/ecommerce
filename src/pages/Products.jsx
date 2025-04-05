import React from 'react'
import ProductsListings from '../components/Products-listings'

const Products = () => {
  return (
    <div className='mt-20'>
      <div className="flex justify-center items-center text-gray-500 bg-gray-200 h-36">
        <h1 className="text-4xl font-mono">Products</h1>
      </div>
    <div>
         <ProductsListings/>
    </div>
    </div>
  )
}

export default Products