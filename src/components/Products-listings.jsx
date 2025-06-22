import products from '../Products-data.json'
import ProductCard from './Product-card'
const ProductsListings = ({searchTerm}) => {
  //this filters the products according to the searched value
  const filteredProducts= searchTerm ? 
  products.filter((product)=>(
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )) : products ;

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10 mt-10 p-4'>
   {
    // products.map((product)=>(
    //     <li key={product.id}>
    //       <ProductCard {...product}/>
    //       </li>
    // ))
    //this checks the filtered length
    filteredProducts.length  > 0 ? (
      filteredProducts.map((product)=>(
        <li key={product.id}>
            <ProductCard {...product}/>
        </li>
      ))
    ) : (
      <p className="text-center text-gray-600 col-span-full">No products found.</p>
    )
    }
    </ul>
  )
}

export default ProductsListings