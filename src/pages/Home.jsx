import React from 'react'
import products from '../Products-data.json'
import ProductCard from '../components/Product-card'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
    {/* poster for thr home page without the any image */}
     <div className="mt-20">
        <div className="text-center bg-[#4CC9FE] py-10 shadow-md">
          <h1 className="text-4xl font-bold text-[#FFFECB]">Home</h1>
          <p className="text-white mt-2 italic">
           "Inspired by the past, delivered with care — bringing comfort and quality to your everyday life."
          </p>
          <p className="text-white mt-1">
            More than just a purchase — it’s an experience we craft with care.
          </p>
        </div>
      </div>

      {/* listing the home page products */}
      <div>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10 mt-10 p-4'>
        {
          products.map((product)=>(
            <li key={product.id}>
              <ProductCard {...product}/>
            </li>
          ))
        }
        </ul>
      </div>
    </>
  )
}

export default Home