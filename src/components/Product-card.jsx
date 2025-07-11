import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import products from "../Products-data.json";
import WishlistContext from "./Wishlist-context";
const ProductCard = ({ id, name, rating, price, quantity,img }) => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  //this filters the products in wishlist with using null and undefined
  const validWishlist = wishlist.filter((p) => p !== null && p != undefined);
  //this is checks the product in wishlist if not present then add the product into wishlist
  const findProductInWishlist = validWishlist.find((p) => p.id === id);
  //this adds the product into wishlist
  const addToWishlist = (item) => {
    if (!item || !item.id || !item.name) {
      console.error("Product not found in product-card.jsx", item);
      return;
    }
    if (!findProductInWishlist) {
      setWishlist([...validWishlist, { ...item, quantity: 1 }]);
      alert("Product is added to wishlist");
    }
  };
  const filterProducts = products.filter((p) => p != null && p != undefined);
  const findProductInProducts = filterProducts.find((p) => p.id === id);
  return (
    <div className="w-72  flex flex-col items-center p-2 bg-gray-100 rounded-lg shadow-md ">
      <div className="p-2">
        {/*takes to seperate page with the name */}
        <Link to={`/product/${name}`}>
          <img
            src={img}
            className="h-52 rounded-2xl"
          />
        </Link>
      </div>

      <div className="flex flex-col items-center space-y-2 pt-3">
        <p className="text-lg text-gray-500">{name}</p>
        <p className="text-amber-500">{rating}★★★★☆</p>
        <p className="text-lg">
          {price}
          <span className="relative left-1">₹</span>
        </p>
        <button
          className="font-medium cursor-pointer"
          onClick={() => {
            addToWishlist(findProductInProducts);
          }}
        >
          {!findProductInWishlist ? (
            <span className="text-blue-500 hover:text-blue-600">
              Add to wishlist
            </span>
          ) : (
            <span>
              <Link to="/wishlist">Visit wishlist</Link>
            </span>
          )}
        </button>
      </div>
    </div>
  );
  //   !wishlist ?
};

export default ProductCard;
