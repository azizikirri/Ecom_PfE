import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import SoukFashion from '../assets/SoukFashion.png';
import { FaShoppingCart } from "react-icons/fa";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineHome
} from "react-icons/ai";
import Contact from "./ContactForm";

const Navbar = ({ cart, setShowCart }) => {
  const [nav, setNav] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
    setNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-between items-center w-auto mx-auto cursor-pointer ${isSticky ? "sticky top-0 shadow-md bg-[#ddd5d5] h-16" : "bg-gradient-to-t from-sky-400 to-indigo-600"}`} style={{ zIndex: 1000 }}>
      <div className="flex justify-center items-center gap-3 ml-6">
        <img src={SoukFashion} alt="logo SoukFashion" className="h-16 w-20" />
        <h1 className="w-12 h-12  font-bold pt-4 text-red-800">
        SoukFashion
      </h1>
      </div>
      <div className="flex justify-center w-full">
        <ul className="hidden md:flex justify-center items-center space-x-4 text-slate-950 ml-auto">
          <li className={isSticky ? "text-slate-950 hover:text-cyan-800 cursor-pointer" : "text-slate-950 hover:text-cyan-800 cursor-pointer font-bold"}>
            <Link to="home"><AiOutlineHome size={29} /></Link>
          </li>
          <Link to="About" smooth={true} duration={500} className="p-4 text-slate-950 hover:text-cyan-800 cursor-pointer font-bold">À propos</Link>
          <Link to="Products" smooth={true} duration={500} className="p-4 text-slate-950 hover:text-cyan-800 cursor-pointer font-bold">Produits</Link>
          <Link to="Accessories" smooth={true} duration={500} className="p-4 text-slate-950 hover:text-cyan-800 cursor-pointer font-bold">Accessoires</Link>
          <li
          className={isSticky ? "p-4 text-slate-950 hover:text-cyan-800 cursor-pointer font-bold":" p-4 text-slate-950 hover:text-cyan-800 cursor-pointer font-bold"}
          onClick={toggleContactForm}
          >
            Contact
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 mr-6">
        <button className="relative" onClick={() => setShowCart(true)}>
        <FaShoppingCart size={25} className="text-slate-950" />
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full text-xs px-2 py-1 sm:px-3 sm:py-1.5">
            {cart.length}
          </span>
        )}
        </button>
        <div onClick={handleNav} className="md:hidden z-20">
          {!nav ? <AiOutlineMenu className="text-slate-950 cursor-pointer" size={30} /> : <AiOutlineClose size={30} className="text-slate-950 cursor-pointer" />}
        </div>
      </div>
      {nav && (
        <div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-[#bdc3c7] bg-slate-800 ease-in-out duration-500 md:hidden" style={{ zIndex: 999 }}>
          <h1 className="w-full text-3xl font-bold m-4 bg-gradient-to-b from-red-600 to-rose-800 bg-clip-text text-transparent">
            SoukFashion.
          </h1>

          <ul className="uppercase p-4 flex flex-col">
            <Link to="About" smooth={true} duration={500} className="p-4 border-b text-stone-300 border-gray-800 hover:text-cyan-200 cursor-pointer font-bold">À propos</Link>
            <Link to="Products" smooth={true} duration={500} className="p-4 border-b text-stone-300 border-gray-800 hover:text-cyan-200 cursor-pointer font-bold">Produits</Link>
            <Link to="Accessories" smooth={true} duration={500} className="p-4 border-b text-stone-300 border-gray-800 hover:text-cyan-200 cursor-pointer font-bold">Accessoires</Link>
            <li
            className="p-4 text-stone-300 hover:text-cyan-900 cursor-pointer font-bold"
            onClick={toggleContactForm}
          >
            Contact
          </li>
           
          </ul>
          
        </div>
      )}
      {showContactForm && <Contact onClose={() => setShowContactForm(false)} />}
    </div>
  );
};
export default Navbar;