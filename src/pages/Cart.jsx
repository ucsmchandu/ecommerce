import React, { useContext } from 'react';
import CartContext from '../components/Cart-context';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCart(cart.filter((item) => item && item.id !== id));
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return cart
      .filter((item) => item !== null && item !== undefined) // Filter out invalid items
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="pt-20">
      <div className="text-center bg-white py-10 shadow-md">
        <h1 className="text-4xl font-bold text-gray-700">Your Cart</h1>
        <p className="text-gray-500 mt-2 italic">
          "Your cart is full of flavor and possibilities."
        </p>
        <p className="text-gray-600 mt-1">
          Double-check your items before heading to checkout!
        </p>
      </div>

      {/* Cart Items Section */}
      <div className="container mx-auto p-4">
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 mt-30">
            <p className="text-2xl">Your cart is empty</p>
            <div className="mt-10">
              <Link
                to="/shop"
                className="p-2 rounded-lg text-[#FFFF] bg-gray-600 hover:bg-gray-500"
              >
                Return to shop
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {cart
              .filter((item) => item !== null && item !== undefined) // Filter out invalid items
              .map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b py-4"
                >
                  {/* Product Image */}
                  <div className="flex justify-center">
                    <img
                      src={item.img }
                      alt={item.name || 'Product'}
                      className="h-44 rounded-2xl p-2"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Price: ₹{item.price}</p>
                    <p className="text-gray-600">
                      <label htmlFor={`quantity-${item.id}`}>Quantity: </label>
                      <input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        max="300"
                        value={item.quantity}
                        onChange={(e) =>
                          setCart(
                            cart.map((cartItem) =>
                              cartItem.id === item.id
                                ? {
                                    ...cartItem,
                                    quantity: parseInt(e.target.value, 10) || 1,
                                  }
                                : cartItem
                            )
                          )
                        }
                        className="border outline-none w-16 text-center"
                      />
                    </p>
                    <p className="text-gray-600">
                      Total: ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Total Section */}
        {cart.length !== 0 && (
          <div className="flex justify-end mt-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Cart Total: ₹{calculateTotal()}
              </h3>
              <button className="px-6 py-2 cursor-pointer bg-green-600 text-white rounded hover:bg-green-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;