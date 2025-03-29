import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import close from "../assets/close.png";
import open from "../assets/menu.png";
import profile from "../assets/user.png";
import search from "../assets/search.gif";
import cartlogo from "../assets/cart-icon.gif";
import search2 from "../assets/search2.png";
import { li } from "framer-motion/client";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const elements = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Shop",
      link: "/shop",
    },
    {
      id: 3,
      name: "Orders",
      link: "/orders",
    },
    {
      id: 4,
      name: "Contact Us",
      link: "/contact",
    },
    {
      id: 5,
      name: "About Us",
      link: "/about",
    },
  ];
  const logos=[
    {
      id:1,
      title:"search",
      img:search
    },
    {
      id:2,
      title:"profile",
      img:profile
    },
    {
      id:3,
      title:"cart",
      img:cartlogo
    }
  ];
  useEffect(() => {
    let previousScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > previousScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      previousScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex justify-between font-mono items-center p-4 text-lg text-black bg-[#FBFBFB] shadow-lg fixed top-0 left-0 w-full z-50"
      >
        <div className=" ">Logo</div>
        {/* this is computer */}
        <div className="hidden md:flex relative top-1 space-x-4 ">
          <ul className="space-x-6 flex">
            {elements.map((data) => (
              <li key={data.id} className="">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className=" rounded-lg hover:bg-[#BCCCDC] "
                >
                  <Link to={data.link} className="cursor-pointer">
                    <li className="p-1">{data.name}</li>
                  </Link>
                </motion.button>
              </li>
            ))}
          </ul>
          <ul className="relative -top-3 space-x-4 flex">
            {
              logos.map((data)=>(
                <li key={data.id}>
                <motion.button
                 whileHover={{ scale: 1.1 }}
                 className=""
                 onClick={() => setShowSearch(true)}
               >
                 <Link to="" className=" cursor-pointer">
                   <li className="p-1">
                     <span title={data.title}>
                       <img src={data.img} className="h-6 relative top-3" />
                     </span>
                   </li>
                 </Link>
               </motion.button>
                </li>
               ))
            }
          </ul>
        </div>
        <div className="flex md:hidden space-x-4">
        <motion.button
        whileHover={{scale:1.1}}
            className="cursor-pointer"
          >
            <img src={profile} className="h-7" />
          </motion.button>
          <motion.button
          whileHover={{scale:1.1}}
            className="cursor-pointer"
            onClick={() => setShowSearch(true)}
          >
            <img src={search} className="h-7" />
          </motion.button>
          <button
            className="cursor-pointer  p-1  rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img src={close} className="h-5 " />
            ) : (
              <img src={open} className="h-6" />
            )}
          </button>
        </div>
      </motion.nav>
      {/* this is mobile */}
      <div
        className={`flex md:hidden w-64 text-white bg-[#FFFF] p-5 fixed top-16 z-50 left-0 h-full rounded-r-lg transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <ul className="w-full flex flex-col space-y-6 ">
          {
            elements.map((data) => (
              <li key={data.id} className="p-1 bg-[#3A6EAA] hover:bg-[#87CEEB] rounded">
                <Link to={data.link} onClick={() => isOpen(false)} className="block text-lg p-1">
                  {data.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-400 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 backdrop-blur-sm w-full h-full flex justify-center items-center"
          >
            <div className=" rounded-lg w-md shadow-lg  bg-gray-300 h-40 z-50">
              <div className="flex float-end  w-fit p-2 ">
                <button
                  onClick={() => setShowSearch(false)}
                  className="cursor-pointer relative right-2 top-2"
                >
                  <img src={close} className="h-4" />
                </button>
              </div>
              <div className="flex justify-center items-center h-full">
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="outline-none p-2 w-80 rounded-md bg-white placeholder:text-lg"
                  placeholder="search item"
                />
                <label htmlFor="search" className=" cursor-pointer">
                  <img
                    src={search2}
                    className="h-8 rounded-lg bg-gray-400  m-1 p-1 "
                  />
                </label>
              </div>
            </div>
            {showSearch && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 backdrop-blur-sm "
                onClick={() => setShowSearch(false)}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
