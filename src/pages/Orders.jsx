import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <>
      <div className="mt-20">
        <div className="text-center bg-white py-10 shadow-md">
          <h1 className="text-4xl font-bold text-gray-700">Orders</h1>
          <p className="text-gray-500 mt-2 italic">
            "Every purchase is a step in your journey—make it unforgettable."
          </p>
          <p className="text-gray-600 mt-1">
            Discover handpicked favorites curated with you in mind.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-gray-500 flex justify-center mt-20 text-2xl">
          No orders yet!
        </h1>
        <span className="flex justify-center mt-5">
          <Link to="/shop">
            <button className="rounded-lg cursor-pointer px-2 text-white  p-1 text-md bg-gray-400">
              Shop
            </button>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Orders;
