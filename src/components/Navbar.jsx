import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link,useNavigate } from "react-router-dom";
const Navbar = () => {
  //this is for searching
  const navigate=useNavigate();
  const [searchValue,setSearchValue]=useState({search:''});
  const handleSearch=(e)=>{
    setSearchValue({...searchValue,[e.target.name]:e.target.value.trim()});
  }
  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    navigate(`/products?search=${searchValue.search}`);
    // setSearchValue({ search: '' });
    setShowSearch(false);

  }
  // console.log(searchValue);
  // this is for mobile menu
  const [isOpen, setIsOpen] = useState(false);
  //this is navbar scroll
  const [hidden, setHidden] = useState(false);
  //this is for search message
  const [showSearch, setShowSearch] = useState(false);
  //navbar elements
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
    {
      id:6,
      name:"Wishlist",
      link:"/wishlist"
    }
  ];
  //this is for scrolling effect of the navbar
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
    {/* from this to end used for computer vision */}
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex justify-between font-mono items-center p-4 text-lg text-black bg-[#FBFBFB] shadow-md fixed top-0 left-0 w-full z-50"
      >
        <div className=" ">Logo</div>
        {/* this is computer */}
        <div className="hidden md:flex relative top-1 space-x-4 ">
          <ul className="space-x-6 flex">
            {/* printing the elements using map function */}
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

          {/* this is logos printing */}
          <ul className="relative -top-3 space-x-4">
            <motion.button 
          whileHover={{scale:1.1}}
          className=''
          onClick={()=>setShowSearch(true)}
          ><Link to="" className=' cursor-pointer'><li className='p-1  rounded-lg'><span title="search"><img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402566/search_dvvaet.gif" className='h-6 relative top-3' /></span></li></Link></motion.button>
          <motion.button 
          whileHover={{scale:1.1}}
          ><Link to="/profile" className=' cursor-pointer'><li className='p-1 '><span title="profile"><img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402601/user_npao9t.png" className='h-6 relative top-3' /></span></li></Link></motion.button>
          <motion.button 
          whileHover={{scale:1.1}}
          className=''
          ><Link to="/cart" className=' cursor-pointer'><li className='p-1  rounded-lg'><span title="cart"><img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402531/cart-icon_n63xlq.gif" className='h-7 relative top-3 ' /></span></li></Link></motion.button>
          </ul>

        </div>

        {/* printing the logos for the mobile */}
        <div className="flex md:hidden space-x-4">
        <motion.button
        whileHover={{scale:1.1}}
            className="cursor-pointer"
          >
           <Link to="/profile"> <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402601/user_npao9t.png" className="h-7" /></Link>
          </motion.button>
          <motion.button
          whileHover={{scale:1.1}}
            className="cursor-pointer"
            onClick={() => setShowSearch(true)}
          >
            <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402566/search_dvvaet.gif" className="h-7" />
          </motion.button>
          <motion.button
        whileHover={{scale:1.1}}
            className="cursor-pointer"
          >
           <Link to="/cart"> <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402531/cart-icon_n63xlq.gif" className="h-7" /></Link>
          </motion.button>
          <button
            className="cursor-pointer  p-1  rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402549/close_c9mlvz.png" className="h-5 " />
            ) : (
              <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402180/menu_fecgzx.png" className="h-6" />
            )}
          </button>
        </div>

      </motion.nav>
      {/* this is mobile */}
      <div
        className={`flex md:hidden w-64 text-white bg-[#FFFF] p-5 fixed  z-50 left-0 h-full rounded-r-lg transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* printing the elements using map function */}
        <ul className="w-full flex flex-col space-y-6 relative top-20">
          <p className="text-black text-3xl font-semibold">Menu</p>
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
      {/* this is mobile menu closing */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-400 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* this is for search bar */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 z-50 backdrop-blur-sm w-full h-full flex justify-center items-center"
          >
            <div className=" rounded-lg w-md shadow-lg  bg-gray-300 h-40 z-50">
              <div className="flex float-end  w-fit p-2 ">
                <button
                  onClick={() => setShowSearch(false)}
                  className="cursor-pointer relative right-2 top-2"
                >
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402549/close_c9mlvz.png" className="h-4" />
                </button>
              </div>
              {/*this is the search functionality  */}
              <form onSubmit={handleSearchSubmit}  className="flex justify-center items-center h-full">
                <input
                  type="text"
                  id="search"
                  name="search"
                  value={searchValue.search}
                  onChange={handleSearch}
                  className="outline-none p-2 w-80 rounded-md bg-white placeholder:text-lg"
                  placeholder="search item"
                />
                <label htmlFor="search" className=" cursor-pointer">
                 <button type="submit">
                 <img
                    src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402582/search2_snqfp8.png"
                    className="h-8 rounded-lg bg-gray-400  m-1 p-1 "
                  />
                 </button>
                </label>
              </form>

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
