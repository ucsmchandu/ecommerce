import React, { useContext } from 'react';
import CartContext from '../components/Cart-context';
const Cart = () => {
  const {cart}=useContext(CartContext);
  console.log(cart);
  return (
    <div className="pt-20">
      
      <div className="flex justify-center items-center text-gray-500 bg-gray-200 h-36">
        <h1 className="text-4xl font-mono">Cart</h1>
      </div>

      <div className="container mx-auto p-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b py-4">
          {/* this is for image */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743401208/cld-sample-5.jpg"
              alt="Product"
              className="h-44 rounded-2xl p-2"
            />
          </div>
            {/* this is for product details */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Product Name</h2>
            <p className="text-gray-600">Price: ₹500</p>
            <p className="text-gray-600">
              <label htmlFor="quantity">Quantity: </label>
              <input id='quantity' type="number" min="1" max="300" className='border outline-none'/>
            </p>
            <p className="text-gray-600">Total: ₹1000</p>
          </div>
            {/* this is for  buttons*/}
          <div className="flex flex-col space-y-2">
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Remove Item
            </button>
          </div>
        </div>
        {/* this is for checkout button */}  
        <div className="flex justify-end mt-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Cart Total: ₹1000</h3>
            <button className="px-6 py-2 cursor-pointer bg-green-600 text-white rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Cart;