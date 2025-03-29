import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
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
    className='flex justify-between items-center p-4 border rounded-b-lg fixed top-0 left-0 w-full z-50'>
      <div className='flex '>
        Logo
      </div>
      {/* this is computer */}
      <div className='hidden sm:flex'>
        <ul className='space-x-6'>
          <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
          ><Link to="/" className=' cursor-pointer'><li className='p-1 border rounded-lg '>Home</li></Link></motion.button>
          <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
          ><Link to="/shop" className=' cursor-pointer'><li className='p-1 border rounded-lg'>Shop</li></Link></motion.button>
          <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
          ><Link to="/orders" className=' cursor-pointer'><li className='p-1 border rounded-lg'>Orders</li></Link></motion.button>
          <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
          ><Link to="/contact" className=' cursor-pointer'><li className='p-1 border rounded-lg'>Contact us</li></Link></motion.button>
          <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
          ><Link to="/about" className=' cursor-pointer'><li className='p-1 border rounded-lg'>About us</li></Link></motion.button>
        </ul>
      </div>
      <div className='flex sm:hidden'>
       <button className='cursor-pointer border p-1 rounded-lg' onClick={()=>setIsOpen(!isOpen)}>
        {
          isOpen ? (
            <p>Close</p>
          ) : (
            <p>Menu</p>
          )
        }
       </button>
      </div>

    </motion.nav>
    {/* this is mobile */}
    <div className={`flex sm:hidden w-64 border p-5 fixed top-20 z-50 left-0 h-full rounded-r-2xl transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
      <ul className='w-full flex flex-col space-y-5 '>
      <Link to="/" className='p-1'><li className='p-2 border block'>Home</li></Link>
          <Link to="/shop" className='p-1'><li className='p-2 border block'>Shop</li></Link>
          <Link to="/orders" className='p-1'><li className='p-2 border block'>Orders</li></Link>
          <Link to="/contact" className='p-1'><li className='p-2 border block'>Contact us</li></Link>
          <Link to="/about" className='p-1'><li className='p-2 border block'>About us</li></Link>
      </ul>
    </div>
    <div className='h-[2400px]'>

    </div>
   </>
  )
}

export default Navbar