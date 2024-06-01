import React from "react";
import { Link } from "react-scroll";
import { AiOutlineGoogle, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-indigo-600 rounded-t-3xl md:mt-0 pb-10 text-zinc-100">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="text-xl pb-4 font-bold text-gray-950">SoukFashion.</h1>
          <p className="text-sm font-bold">
            Découvrez le charme de la mode traditionnelle marocaine avec SoukFashion. Nous offrons des vêtements et accessoires authentiques, fabriqués avec soin et passion.
          </p>
          <div className="flex mt-2 gap-4 items-center">
            <FaFacebook size={30} className="hover:text-cyan-500 cursor-pointer"/>
            <AiOutlineGoogle size={38} className="hover:text-cyan-500 cursor-pointer"/>
            <AiOutlineWhatsApp size={30} className="hover:text-cyan-500 cursor-pointer"/>
          </div>
        </div>
       
        <div>
          <h1 className="font-bold text-xl pb-4 pt-5 md:pt-0 text-gray-950">Services</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer font-bold"
            >
              Assistance
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer font-bold"
            >
              Livraison gratuite
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer font-bold"
            >
              Paiement sécurisé
            </Link>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className=" text-xl pt-5 md:pt-0 text-gray-950 font-bold">Contactez-nous</h1>
          <nav className="flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Tikiouine Agadir rue 1 rue 56
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500} className="font-bold">
              SoukFashion@gmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500} className="font-bold">
              +212637986699 ¦ 0523347800
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center">
          2024 &copy; développé par
          <span className="text-cyan-500 p-1 font-bold">Aziz</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
