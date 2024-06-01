import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowLeft, FaArrowRight, FaRegStar, FaStar, FaStarHalfAlt, FaRegHeart, FaHeart, FaShoppingCart, FaPlus } from 'react-icons/fa'; 
import BuyNow from '../Sections/BuyNow'; 

import prod1 from "../assets/men/image0.jpg";
import prod2 from "../assets/men/image01.jpg";
import prod3 from "../assets/men/image02.jpg";
import prod4 from "../assets/men/image04.jpg";
import prod5 from "../assets/men/image03.jpg";
import prod6 from "../assets/men/image05.jpg";

import prod7 from "../assets/women/wimage0.jpg";
import prod8 from "../assets/women/wimage01.jpg";
import prod9 from "../assets/women/wimage02.jpg";
import prod10 from "../assets/women/wimage03.jpg";
import prod11 from "../assets/women/wimage04.jpg";
import prod12 from "../assets/women/wimage05.jpg";

const Product = ({ addToCart }) => {
  const slider = useRef(null);
  const [filter, setFilter] = useState('all');
  const [favorites, setFavorites] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const data = [
    { img: prod1, gender: 'men', name: "Product 1", id: "001", price: "400DH", rating: 5.5 },
    { img: prod2, gender: 'men', name: "Product 2", id: "002", price: "500DH", rating: 3.5 },
    { img: prod3, gender: 'men', name: "Product 3", id: "003", price: "450DH", rating: 4.5 },
    { img: prod4, gender: 'men', name: "Product 4", id: "004", price: "600DH", rating: 4 },
    { img: prod5, gender: 'men', name: "Product 5", id: "005", price: "400DH", rating: 3 },
    { img: prod6, gender: 'men', name: "Product 6", id: "006", price: "400DH", rating: 2 },

    { img: prod7, gender: 'women', name: "Product 1", id: "007", price: "300DH", rating: 4.5 },
    { img: prod8, gender: 'women', name: "Product 2", id: "008", price: "600DH", rating: 5 },
    { img: prod9, gender: 'women', name: "Product 3", id: "009", price: "650DH", rating: 3 },
    { img: prod10, gender: 'women', name: "Product 4", id: "010", price: "400DH", rating: 3.5 },
    { img: prod11, gender: 'women', name: "Product 5", id: "011", price: "350DH", rating: 4 },
    { img: prod12, gender: 'women', name: "Product 6", id: "012", price: "500DH", rating: 4.5 },
  ];

  const filteredData = filter === 'all' ? data : data.filter(item => item.gender === filter);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getStarColor = (rating, i) => {
    const colors = ["text-red-700", "text-green-700", "text-blue-700", "text-purple-700", "text-pink-700"];
    if (rating >= i + 1) {
      return colors[Math.floor(Math.random() * colors.length)];
    } else if (rating > i && rating < i + 1) {
      return "text-yellow-500";
    } else {
      return "text-gray-300";
    }
  };

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1023, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true} },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 } },
    ],
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedProduct(null);
  };

  return (
    <div id="Products" className="bg-gradient-to-b from-stone-200 via-green-100 to-cyan-400 min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16 text-slate-700">
      <h1 className="text-4xl text-slate-900 font-bold mx-auto text-center flex justify-center items-center">Produits</h1>
      <div className="mx-auto mb-4">
        <p className="mt-2 text-center lg:text-start font-mono">
        Les vêtements traditionnels marocains capturent l'essence de l'histoire et de la culture du pays, alliant élégance intemporelle et artisanat méticuleux. Des kaftans fluides ornés de broderies délicates aux jellabas richement décorées, chaque pièce incarne l'art et le savoir-faire marocains. Portés lors de célébrations festives ou au quotidien, ces vêtements reflètent le riche patrimoine et la diversité culturelle du Maroc.
        </p>
      </div>
      <div className="flex gap-3 mt-2 lg:mt-0 mx-auto">
        <button className="border-2 border-black bg-transparent rounded-full p-2 hover:bg-gray-200 active:bg-gray-400 focus:outline-none" onClick={() => slider.current.slickPrev()}>
          <FaArrowLeft size={25} className="text-black hover:text-sky-700" />
        </button>
        <div className="flex gap-3">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white py-2 px-4 rounded border border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            <option value="all">Tout</option>
            <option className="font-bold" value="women">Femmes</option>
            <option className="font-bold" value="men">Hommes</option>
          </select>
        </div>
        <button className="border-2 border-black bg-transparent rounded-full p-2 hover:bg-gray-200 active:bg-gray-400 focus:outline-none" onClick={() => slider.current.slickNext()}>
          <FaArrowRight size={25} className="text-black hover:text-sky-700" />
        </button>
      </div>
      <Slider ref={slider} {...settings}>
        {filteredData.map((item, index) => (
          <div key={index} className="p-4 ">
            <div className="shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-violet-200 to-pink-200">
              <img src={item.img} alt={item.name} className="object-cover h-80 w-full" />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-slate-950">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600">{item.price}</p>
                </div>
                <div className="flex ">
                  {Array.from({ length: 5 }, (_, i) => {
                    const rating = item.rating || 0;
                    return rating >= i + 1 ? (
                      <FaStar key={i} className={getStarColor(rating, i)} />
                    ) : rating > i && rating < i + 1 ? (
                      <FaStarHalfAlt key={i} className="text-yellow-600" />
                    ) : (
                      <FaRegStar key={i} className="text-slate-700" />
                    );
                  })}
                </div>
                <div className="flex items-center justify-between mt-3">
                  <button className={`text-gray-600 hover:text-red-500`} onClick={() => toggleFavorite(item.id)}>
                    {favorites[item.id] ? <FaHeart className="text-red-500" size={20} /> : <FaRegHeart size={20} />}
                  </button>
                  <button
                    className="relative group flex items-center justify-center bg-transparent text-gray-900"
                    onClick={() => addToCart(item)}
                  >
                    <FaPlus className="w-4 h-6" />
                  </button>
                  <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleBuyNow(item)}
                  >
                    <FaShoppingCart className="inline mr-2" />Acheter maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {showForm && (
        <BuyNow product={selectedProduct} onClose={closeForm} />
      )}
    </div>
  );
};

export default Product;
