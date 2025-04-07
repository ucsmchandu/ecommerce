import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const ProductCard = ({id,name,rating,price,quantity}) => {
    const [wishlist,setWishlist]=useState(false);
  return (
        <div className='w-72  flex flex-col items-center p-2 bg-gray-100 rounded-lg shadow-md '>
        <div className='p-2'>
            {/*takes to seperate page with the name */}
            <Link to={`/product/${name}`}>
            <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743401208/cld-sample-5.jpg" className='h-52 rounded-2xl' />
            </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 pt-3">
            <p className='text-lg text-gray-500'>{name}</p>
            <p className='text-amber-500'>{rating}★★★★☆</p>
            <p className='text-lg'>{price}<span className="relative left-1">₹</span></p>
            <button className='font-medium cursor-pointer' onClick={()=>setWishlist(true)}>
                {
                    !wishlist ? <span className='text-blue-500 hover:text-blue-600'>Add to wishlist</span>:<span>Visit wishlist</span>
                }
            </button>
        </div>

        </div>
  )
}

export default ProductCard