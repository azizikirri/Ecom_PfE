import React from 'react';
import { FaShippingFast, FaLock, FaHandsHelping } from 'react-icons/fa';

const Services = () => {
  return (
    <div className=" cursor-pointer bg-gradient-to-b from-blue-900 via-violet-400 to-teal-100 px-10 pt-20 md:pb-10 flex flex-col md:flex-row justify-around items-center py-8 space-y-4 md:space-y-0 md:space-x-4">
      <div className="bg-sky-700 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
        <FaShippingFast className="w-12 h-12 mb-4 text-rose-800" />
        <h3 className="text-lg font-bold mb-2 text-slate-950">Livraison gratuite</h3>
        <p>Profitez de nos services de livraison gratuite pour une expérience d'achat sans souci.</p>
      </div>
      <div className="bg-sky-700 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
        <FaLock className="w-12 h-12 mb-4 text-rose-800" />
        <h3 className="text-lg font-bold mb-2 text-slate-950">Paiement sécurisé</h3>
        <p>Bénéficiez de transactions sécurisées avec nos options de paiement fiables.</p>
      </div>
      <div className="bg-sky-700 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
        <FaHandsHelping className="w-12 h-12 mb-4 text-rose-800" />
        <h3 className="text-lg font-bold mb-2 text-slate-950">Nous aimons vous aider</h3>
        <p>Notre équipe dédiée est là pour vous assister à chaque étape.</p>
      </div>
    </div>
  );
};

export default Services;
