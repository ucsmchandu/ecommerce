import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import close from '../assets/close.png'
import open from '../assets/menu.png'
import { div } from 'framer-motion/client'
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  const [hidden,setHidden]=useState(false);
  useEffect(()=>{
    let previousScrollY=window.scrollY;
    const handleScroll=()=>{
      const currentScrollY=window.scrollY;
      if(currentScrollY > previousScrollY && currentScrollY > 100){
        setHidden(true);
      }
      else{
        setHidden(false);
      }
    previousScrollY=currentScrollY;
    };
    window.addEventListener("scroll",handleScroll);
    return ()=>{
      window.removeEventListener("scroll",handleScroll);
    };
  },[]);
  return (
   <>
    <motion.nav 
    variants={{
      visible:{y:0},
      hidden:{y:-100}
    }}
    animate={hidden ? "hidden" : "visible"}
    transition={{duration :0.5,ease:"easeInOut"}}
    className='flex justify-between items-center p-5  text-[#ffffff] bg-[#008080] fixed top-0 left-0 w-full z-50'>
      <div className='flex '>
        Logo
      </div>
      {/* this is computer */}
      <div className='hidden sm:flex'>
        <ul className='space-x-6'>
          <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
          className='bg-[#39a2a2] rounded-lg hover:bg-[#006666] '
          ><Link to="/" className='cursor-pointer'><li className='p-1   '>Home</li></Link></motion.button>
          <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
          className='bg-[#39a2a2] rounded-lg hover:bg-[#006666]'
          ><Link to="/shop" className=' cursor-pointer'><li className='p-1  rounded-lg'>Shop</li></Link></motion.button>
          <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
          className='bg-[#39a2a2] rounded-lg hover:bg-[#006666]'
          ><Link to="/orders" className=' cursor-pointer'><li className='p-1  rounded-lg'>Orders</li></Link></motion.button>
          <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
          className='bg-[#39a2a2] rounded-lg hover:bg-[#006666]'
          ><Link to="/contact" className=' cursor-pointer'><li className='p-1  rounded-lg'>Contact us</li></Link></motion.button>
          <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
          className='bg-[#39a2a2] rounded-lg hover:bg-[#006666]'
          ><Link to="/about" className=' cursor-pointer'><li className='p-1  rounded-lg'>About us</li></Link></motion.button>
        </ul>
      </div>
      <div className='flex sm:hidden'>
       <button className='cursor-pointer border p-1 rounded-lg' onClick={()=>setIsOpen(!isOpen)}>
        {
          isOpen ? (
            <img src={close} className='h-6'/>
          ) : (
            <img src={open} className='h-6' />
          )
        }
       </button>
      </div>

    </motion.nav>
    {/* this is mobile */}
    <div className={`flex sm:hidden w-64 text-white bg-[#27548A] p-5 fixed top-20 z-50 left-0 h-full rounded-r-lg transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
      <ul className='w-full flex flex-col space-y-4 '>
      <Link to="/" className='p-1 bg-[#3A6EAA] hover:bg-[#87CEEB] rounded'><li className='p-1 block text-lg'>Home</li></Link>
          <Link to="/shop" className='p-1  bg-[#3A6EAA] hover:bg-[#87CEEB] rounded'><li className='p-1  block text-lg'>Shop</li></Link>
          <Link to="/orders" className='p-1 bg-[#3A6EAA] hover:bg-[#87CEEB] rounded'><li className='p-1  block text-lg'>Orders</li></Link>
          <Link to="/contact" className='p-1 bg-[#3A6EAA] hover:bg-[#87CEEB] rounded'><li className='p-1  block text-lg'>Contact us</li></Link>
          <Link to="/about" className='p-1 bg-[#3A6EAA] hover:bg-[#87CEEB] rounded'><li className='p-1  block text-lg'>About us</li></Link>
      </ul>
    </div>
    {
      isOpen && (
        <div 
        className='fixed inset-0 bg-opacity-50 z-40'
        onClick={()=> setIsOpen(false)}
        />
      )
    }
   </>
  )
}

export default Navbar