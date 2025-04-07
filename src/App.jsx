import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import CartContext from './components/Cart-context'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import MainLayout from './mainlayout/MainLayout'
import Products from './pages/Products'
import ProductDetails from './pages/Product-details'
import Wishlist from './pages/Wishlist'

const App = () => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
      return Array.isArray(parsedCart) ? parsedCart.filter((item) => item !== null && item !== undefined) : [];
    } catch (error) {
      console.error("Error reading cart from local storage:", error);
      return [];
    }
  });
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{cart,setCart}}>
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="shop" element={<Products/>}/>
        <Route path="cart" element={<Cart/>} />
        <Route path="orders" element={<Orders/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>} />
        <Route path="products" element={<Products/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
        <Route path="product/:name" element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </Router>
    </CartContext.Provider>
  )
}

export default App