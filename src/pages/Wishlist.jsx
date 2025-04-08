import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../components/Cart-context';
import WishlistContext from '../components/Wishlist-context';
const Wishlist = () => {
 const {wishlist,setWishlist}=useContext(WishlistContext);
 const {cart,setCart}=useContext(CartContext);
 //remove product from the wishlist
 const filteredProducts=wishlist.filter((p)=>p!==null && p!==undefined);
 const removeProduct=(id)=>{
  setWishlist(filteredProducts.filter((p)=>p && p.id!==id));
 }

 const addProductToCart=(item)=>{
  if(!item || !item.id || !item.name ){
    console.error("Product not found from wishlist.jsx",item);
    return;
  }
  const filterCart=cart.filter((p)=>p!==null && p!=undefined);
  const checkExistingProduct=filterCart.find((p)=>p.id===item.id);
  if(checkExistingProduct){
    setCart(
      filterCart.map((product)=>(
        product.id===item.id ?
        {...product,quantity:product.quantity+1} :
        product
      ))
    );
  }
  else{
    setCart([...filterCart,{...item,quantity:1}]);
  }
 };

  return (
    <div className="mt-20 min-h-screen bg-gray-100">
      {/* Header */}
      <div className="text-center bg-white py-10 shadow-md">
        <h1 className="text-4xl font-bold text-gray-700">Your Wishlist</h1>
        <p className="text-gray-500 mt-2">All the products you love, in one place</p>
      </div>

      <div className="container mx-auto p-6">
        {wishlist.length === 0 ? (
          <div className="text-center text-gray-500 mt-16">
            <p className="text-2xl">Your wishlist is empty </p>
            <div className='mt-6'>
            <Link
              to="/shop"
              className="p-2 rounded-lg text-[#FFFF] bg-gray-600 hover:bg-gray-500"
            >
              Return to shop
            </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center"
              >
                <img
                  src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743401208/cld-sample-5.jpg"
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded-xl"
                />
                <h2 className="text-xl font-semibold mt-4 text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600 mt-1">Price: ₹{item.price}</p>

                <div className="flex gap-4 mt-6">
                  <button 
                  onClick={()=>{addProductToCart(item);
                    alert("Product is added to cart");
                  }}
                  className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Move to Cart
                  </button>
                  <button
                  onClick={()=>removeProduct(item.id)}
                  className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
