import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faShoppingBag, faUsers, faTags  } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '../assets/men/HeroImagee.jpg';
import Image1 from '../assets/men/image04.jpg';
import Image2 from '../assets/men/image01.jpg';
import Image3 from '../assets/men/image02.jpg';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(HeroImg);
  const [clickedImage, setClickedImage] = useState(null);

  const changeImage = (img) => {
    setCurrentImage(img);
  };

  const toggleBorderColor = (img) => {
    setClickedImage(img === clickedImage ? null : img);
  };

  const statsAnimation = useSpring({
    from: { number: 0 },
    to: { number: 1000 },
    config: { duration: 1000 },
  });

  const shopsAnimation = useSpring({
    from: { number: 0 },
    to: { number: 850 },
    config: { duration: 1000 },
  });

  const customersAnimation = useSpring({
    from: { number: 0 },
    to: { number: 2500 },
    config: { duration: 1000 },
  });
  
  const solde = useSpring({
    from: { number: 0 },
    to: { number: 850 },
    config: { duration: 1000 },
  });

  return (
    <div className="bg-slate-200 flex justify-center items-center">
      <div className="max-w-screen-xl px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold leading-none md:text-5xl xl:text-6xl mb-4 text-slate-800">
            Les vêtements traditionnels <i className='text-red-700'>maro</i><i className='text-green-700'>cains</i>
          </h1>
          <p className="font-light md:text-lg lg:text-xl mb-6 lg:mb-8 text-slate-700">
            Découvrez le riche patrimoine et les motifs complexes des tenues traditionnelles marocaines. Notre collection vous propose des vêtements authentiques et artisanaux qui reflètent les profondes racines culturelles et l'artisanat du Maroc.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          </div>
          <div className="col-span-1 md:col-span-5 md:offset-7 grid grid-cols-3 gap-4">
            <img
              src={Image1}
              alt="Image1"
              onClick={() => {
                changeImage(Image1);
                toggleBorderColor(Image1);
              }}
              className={`w-40 h-40 cursor-pointer rounded-lg transition duration-300 ease-in-out transform hover:scale-110 ${clickedImage === Image1 ? 'border-red-500 border-2' : ''}`}
            />
            <img
              src={Image2}
              alt="Image2"
              onClick={() => {
                changeImage(Image2);
                toggleBorderColor(Image2);
              }}
              className={`w-40 h-40 cursor-pointer rounded-lg transition duration-300 ease-in-out transform hover:scale-110 ${clickedImage === Image2 ? 'border-blue-500 border-2' : ''}`}
            />
            <img
              src={Image3}
              alt="Image3"
              onClick={() => {
                changeImage(Image3);
                toggleBorderColor(Image3);
              }}
              className={`w-40 h-40 cursor-pointer rounded-lg transition duration-300 ease-in-out transform hover:scale-110 ${clickedImage === Image3 ? 'border-green-500 border-2' : ''}`}
            />
          </div>
        </div>
        <div className="md:col-span-5 flex flex-col items-center">
          <img src={currentImage} alt="Hero" className="w-full h-auto max-w-md rounded-lg mb-4" />
        </div>
        <div className="flex justify-center mt-4 w-full md:col-span-5 md:ml-44">
        <div className="flex justify-between max-w-md w-full md:max-w-full md:ml-0 cursor-pointer md:space-x-52">
          <animated.div className="flex flex-col items-center text-sky-950 transition duration-300 ease-in-out transform hover:scale-110">
            <FontAwesomeIcon icon={faBuilding} size="2x" />
            <animated.p className="text-lg font-bold text-slate-800">
              {statsAnimation.number.interpolate((val) => Math.floor(val))}
            </animated.p>
            <p className="text-lg font-bold text-sky-700">Marques</p>
          </animated.div>
          <animated.div className="flex flex-col items-center text-sky-950 transition duration-300 ease-in-out transform hover:scale-110">
            <FontAwesomeIcon icon={faShoppingBag} size="2x" />
            <animated.p className="text-lg font-bold text-slate-800">
              {shopsAnimation.number.interpolate((val) => Math.floor(val))}
            </animated.p>
            <p className="text-lg font-bold text-sky-700">Magasins</p>
          </animated.div>
          <animated.div className="flex flex-col items-center text-sky-950 transition duration-300 ease-in-out transform hover:scale-110">
            <FontAwesomeIcon icon={faUsers} size="2x" />
            <animated.p className="text-lg font-bold text-slate-800">
              {customersAnimation.number.interpolate((val) => Math.floor(val))}
            </animated.p>
            <p className="text-lg font-bold text-sky-700">Clients</p>
          </animated.div>
          <animated.div className="flex flex-col items-center text-sky-950 transition duration-300 ease-in-out transform hover:scale-110">
            <FontAwesomeIcon icon={faTags} size="2x" />
            <animated.p className="text-lg font-bold text-slate-800">
              {solde.number.interpolate((val) => Math.floor(val))}
            </animated.p>
            <p className="text-lg font-bold text-sky-700">Solde</p>
          </animated.div>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Hero;
