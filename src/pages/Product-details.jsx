import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from '../components/Cart-context'
import WishlistContext from "../components/Wishlist-context";
import ProductsListings from "../components/Products-listings";
import { useParams } from "react-router-dom";
import products from '../Products-data.json'
const ProductDetails = () => {
  // initializing the cart array object by using the contextApi
  const {cart,setCart}=useContext(CartContext);
    //here is the function to add the items into cart
  const addToCart = (item) => {
    // Validate the incoming item
    if (!item || !item.id || !item.price) {
      console.error("Invalid product data:", item);
      return;
    }
    // Filter out null or undefined items from the cart
    const validCart = cart.filter((p) => p !== null && p !== undefined);
    // Check if the product already exists in the cart
    const existingProduct = validCart.find((p) => p.id === item.id);
    if (existingProduct) {
      setCart(
        validCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...validCart, { ...item, quantity: 1 }]);
    }
  };

  const {wishlist,setWishlist}=useContext(WishlistContext);
  const filterWishlist=wishlist.filter((p)=>p!=null && p!=undefined);
  const addProductToWishlist=(item)=>{
    if(!item || !item.id || !item.name){
      console.error("Product not found in product-details :",item);
      return;
    }
  const findProductInWishlist=filterWishlist.find((p)=>p.id===item.id);
    if(!findProductInWishlist){
      setWishlist([...filterWishlist,{...item,quantity:1}]);
    }
  }
  // taking the url value using params
  const {name}=useParams();
  //checking
  const product = products.find((p) => p.name === decodeURIComponent(name));
if (!product) {
  return (
    <h2 className="text-red-500 mt-20 text-3xl flex justify-center items-center h-96">
      Product Not Found!
    </h2>
  );
}
  if(!product){
    return <h2 className=" text-red-500 mt-20 text-3xl flex justify-center items-center h-96">Product Not Found !</h2>;
  }
  return (
    <>
    <div className="container mx-auto  lg:w-7xl bg-gray-100 mt-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center p-4 ">
        <div className="w-full flex justify-center">
          <img
          // here we have to use the data base data
            src={product.img}
            className="max-w-full rounded-lg shadow-md"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <h2 className="text-2xl text-gray-700">Price: ₹{product.price}</h2>
          <p className="text-yellow-500">Rating: {product.rating} ★★★★☆</p>
          <div>
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-gray-600">
              {/* here also we have to use the data base data */}
              This is a detailed description of the product. It provides
              information about the product's features, benefits, and usage.
            </p>
          </div>

          <div className="space-y-2">
l            {/* <div className="flex space-x-4">
              {/* buttons */}
              {/* these weights are also to be changed using json data base 
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer">
                200
              </button>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer">
                500
              </button>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer">
                1000
              </button>
            </div> */}
          </div>
          <div>
            {/* add to cart button */}
            <button
            onClick={()=>{addToCart(product);
              alert("Product added to cart!");
            }}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
              Add to cart
            </button>
          </div>
          <div>
            {/* add to wishlist */}
            <button
            onClick={()=>addProductToWishlist(product)}
            className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 cursor-pointer">
             {
              !filterWishlist.find((p)=>p.id===product.id) ?
              <span>Add to wishlist</span> :
              <span><Link to="/wishlist">Visit wishlist</Link></span>
              }
            </button>
          </div>
        </div>
      </div>
      {/* payment img */}
      <div className="container flex flex-col items-end mx-auto p-3">
        <img
          src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743620252/payment_ku7mgu.png"
          className="max-w-full lg:h-32"
        />
      </div>
    </div>
    <div className="mt-20">
      <div className="flex justify-center">
        <p className="text-lg font-semibold">Related Products</p>
      </div>
      <div className="mt-10">
        <ProductsListings/>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
