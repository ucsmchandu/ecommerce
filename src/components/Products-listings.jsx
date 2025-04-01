import React from 'react'
import products from '../Products-data.json'
import ProductCard from './Product-card'
const ProductsListings = () => {

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center gap-10 pt-30 p-4'>
   {
    products.map((product)=>(
        <li key={product.id}><ProductCard {...product}/></li>
    ))
    }
    </ul>
  )
}

export default ProductsListings