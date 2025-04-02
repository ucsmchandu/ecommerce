import React from "react";

const ProductDetails = () => {
  return (
    <div className="container mx-auto  lg:w-7xl bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center ">
        <div className="w-full flex justify-center">
          <img
            src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743525839/chicken-bone-pickle-1-scaled_qjq4h3.webp"
            className="max-w-full rounded-lg shadow-md"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Product Name</h1>
          <h2 className="text-2xl text-gray-700">Price: $XX.XX</h2>
          <p className="text-yellow-500">Rating: ★★★★☆</p>
          <div>
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-gray-600">
              This is a detailed description of the product. It provides
              information about the product's features, benefits, and usage.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Weight</h3>
            <div className="flex space-x-4">
              {/* buttons */}
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer">
                200
              </button>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer">
                500
              </button>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer">
                1000
              </button>
            </div>
          </div>
          <div>
            {/* add to cart button */}
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Add to cart
            </button>
          </div>
          <div>
            {/* add to wishlist */}
            <button className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center mx-auto p-3">
        <h3 className="text-lg font-semibold">Payment Options</h3>
        <img
          src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743620252/payment_ku7mgu.png"
          className="max-w-full lg:h-32"

        />
      </div>
    </div>
  );
};

export default ProductDetails;
