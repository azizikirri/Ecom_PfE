import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BuyNow from '../Sections/BuyNow'; 

import { FaArrowLeft, FaArrowRight, FaRegStar, FaStar, FaStarHalfAlt, FaRegHeart, FaHeart, FaShoppingCart, FaPlus  } from 'react-icons/fa'; 
import acc1 from "../assets/menAcce/menacce0.jpg";
import acc2 from "../assets/menAcce/menacce01.jpg";
import acc3 from "../assets/menAcce/menacce02.jpg";
import acc4 from "../assets/menAcce/menacce03.jpg";
import acc5 from "../assets/menAcce/menacce04.jpg";
import acc6 from "../assets/menAcce/menacce05.jpg";
import acc7 from "../assets/menAcce/menacce06.jpg";
import acc8 from "../assets/menAcce/menacce07.jpg";
import acc9 from "../assets/menAcce/menacce08.jpg";
import acc10 from "../assets/menAcce/menacce09.jpg";
import acc11 from "../assets/menAcce/menacce010.jpg";
import acc12 from "../assets/menAcce/menacce011.jpg";
import acc13 from "../assets/menAcce/menacce012.jpg";
import acc14 from "../assets/menAcce/menacce013.jpg";
import acc15 from "../assets/menAcce/menacce014.jpg";

import acc01 from "../assets/womenAcce/accewim0.jpg";
import acc02 from "../assets/womenAcce/accewim1.jpg";
import acc03 from "../assets/womenAcce/accewim2.jpg";
import acc04 from "../assets/womenAcce/accewim3.jpg";
import acc05 from "../assets/womenAcce/accewim4.jpg";
import acc06 from "../assets/womenAcce/accewim5.jpg";
import acc07 from "../assets/womenAcce/accewim6.jpg";
import acc08 from "../assets/womenAcce/accewim7.jpg";
import acc09 from "../assets/womenAcce/accewim8.jpg";
import acc010 from "../assets/womenAcce/accewim9.jpg";
import acc011 from "../assets/womenAcce/accewim10.jpg";
import acc012 from "../assets/womenAcce/accewim11.jpg";
import acc013 from "../assets/womenAcce/accewim12.jpg";
import acc014 from "../assets/womenAcce/accewim13.jpg";
import acc015 from "../assets/womenAcce/accewim14.jpg";
import acc016 from "../assets/womenAcce/accewim15.jpg";

const Accessories = ({addToCart}) => {
  const slider = useRef(null);
  const [filter, setFilter] = useState('all');
  const [favorites, setFavorites] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const data = [
    { img: acc1, gender: 'men', name: "Accessory 1", id: "A001", price: "400DH", rating: 4.5},
    { img: acc2, gender: 'men', name: "Accessory 2", id: "A002", price: "450DH" , rating: 4.5},
    { img: acc3, gender: 'men', name: "Accessory 3", id: "A003", price: "200DH" , rating: 3.5},
    { img: acc4, gender: 'men', name: "Accessory 1", id: "A001", price: "250DH" , rating: 5},
    { img: acc5, gender: 'men', name: "Accessory 2", id: "A002", price: "350DH" , rating: 4.5},
    { img: acc6, gender: 'men', name: "Accessory 3", id: "A003", price: "150DH" , rating: 4.5},
    { img: acc7, gender: 'men', name: "Accessory 1", id: "A001", price: "150DH" , rating: 4},
    { img: acc8, gender: 'men', name: "Accessory 2", id: "A002", price: "150DH" , rating: 4},
    { img: acc9, gender: 'men', name: "Accessory 3", id: "A003", price: "150DH" , rating: 4.5},
    { img: acc10, gender: 'men', name: "Accessory 1", id: "A001", price: "150DH" , rating: 4.5},
    { img: acc11, gender: 'men', name: "Accessory 2", id: "A002", price: "150DH" , rating: 5},
    { img: acc12, gender: 'men', name: "Accessory 3", id: "A003", price: "150DH" , rating: 4},
    { img: acc13, gender: 'men', name: "Accessory 2", id: "A002", price: "150DH" , rating: 4.5},
    { img: acc14, gender: 'men', name: "Accessory 3", id: "A003", price: "150DH" , rating: 4},
    { img: acc15, gender: 'men', name: "Accessory 3", id: "A003", price: "800DH" , rating: 3.5},

    { img: acc01, gender: 'women', name: "Accessory 1", id: "A001", price: "400DH", rating: 4.5},
    { img: acc02, gender: 'women', name: "Accessory 2", id: "A002", price: "450DH" , rating: 5},
    { img: acc03, gender: 'women', name: "Accessory 3", id: "A003", price: "200DH" , rating: 4.5},
    { img: acc04, gender: 'women', name: "Accessory 1", id: "A001", price: "900DH" , rating: 3.5},
    { img: acc05, gender: 'women', name: "Accessory 2", id: "A002", price: "200DH" , rating: 4.5},
    { img: acc06, gender: 'women', name: "Accessory 3", id: "A003", price: "150DH" , rating: 2.5},
    { img: acc07, gender: 'women', name: "Accessory 1", id: "A001", price: "1000DH" , rating: 4.5},
    { img: acc08, gender: 'women', name: "Accessory 2", id: "A002", price: "600DH" , rating: 5},
    { img: acc09, gender: 'women', name: "Accessory 3", id: "A003", price: "150DH" , rating: 3.5},
    { img: acc010, gender: 'women', name: "Accessory 1", id: "A001", price: "600DH" , rating: 4},
    { img: acc011, gender: 'women', name: "Accessory 2", id: "A002", price: "1000DH" , rating: 4},
    { img: acc012, gender: 'women', name: "Accessory 3", id: "A003", price: "200DH" , rating: 3},
    { img: acc013, gender: 'women', name: "Accessory 2", id: "A002", price: "200DH" , rating: 3.5},
    { img: acc014, gender: 'women', name: "Accessory 3", id: "A003", price: "500DH" , rating: 4},
    { img: acc015, gender: 'women', name: "Accessory 3", id: "A003", price: "800DH" , rating: 5},
    { img: acc016, gender: 'women', name: "Accessory 3", id: "A003", price: "2000DH" , rating: 4.5},
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
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
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
  <div id="Accessories" className=" bg-gradient-to-b from-cyan-400 via-indigo-300 to-fuchsia-300 min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16 text-slate-700">
  <h1 className="text-4xl text-slate-900 font-bold mx-auto text-center flex justify-center items-center">Accessoires</h1>
  <div className="mx-auto mb-4">
    <p className="mt-2 text-center lg:text-start font-mono">
     
    Découvrez l'essence du patrimoine marocain avec notre collection d'accessoires traditionnels. Chaque pièce incarne des siècles de savoir-faire et de richesse culturelle, des ceintures en cuir aux motifs complexes aux écharpes tissées à la main et vibrantes. Sublimez votre ensemble avec l'élégance intemporelle des accessoires marocains, ajoutant une touche d'authenticité et de flair à chaque tenue.
    </p>
  </div>
  <div className="flex gap-3 mt-2 lg:mt-0 mx-auto">
    <button className="border-2 border-black bg-transparent rounded-full p-2 hover:bg-gray-200 active:bg-gray-400 focus:outline-none" onClick={() => slider.current.slickPrev()}>
      <FaArrowLeft size={25} className="text-black hover:text-sky-700"/>
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
      <FaArrowRight size={25} className="text-black hover:text-sky-700"/>
    </button>
  </div>
  <Slider ref={slider} {...settings}>
    {filteredData.map((item, index) => (
      <div key={index} className="p-4 ">
        <div className="shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-blue-200 to-cyan-200">
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
              <button className={`text-slate-700 hover:text-red-500`} onClick={() => toggleFavorite(item.id)}>
                {favorites[item.id] ? <FaHeart className="text-red-500 " size={20} /> : <FaRegHeart size={20} />}
              </button>
              <button
              className="relative group flex items-center justify-center bg-transparent text-gray-900"               onClick={() => addToCart(item)}
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

export default Accessories;

             