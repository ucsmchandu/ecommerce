import React from 'react';

const Wishlist = () => {
  const wishlist = [
    {
      id: 1,
      name: 'Spicy Garlic Pickle',
      price: 299,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Sweet Mango Pickle',
      price: 399,
      image: 'https://via.placeholder.com/150',
    },
  ];

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
            <p className="text-2xl">Your wishlist is empty 😔</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded-xl"
                />
                <h2 className="text-xl font-semibold mt-4 text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600 mt-1">Price: ₹{item.price}</p>

                <div className="flex gap-4 mt-6">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Move to Cart
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
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
