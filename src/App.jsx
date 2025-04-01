import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link,useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Register from './pages/Register'
import MainLayout from './mainlayout/MainLayout'
import Products from './pages/Products'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="shop" element={<Shop/>}></Route>
        <Route path="cart" element={<Cart/>} />
        <Route path="orders" element={<Orders/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>} />
        <Route path="products" element={<Products/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App