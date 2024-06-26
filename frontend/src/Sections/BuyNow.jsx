import React, { useState } from 'react';
import { FaUser, FaCreditCard, FaRuler, FaLock, FaMapMarkerAlt, FaPhone, FaMoneyBill } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyNow = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    cardNumber: '',
    size: '',
    cvv: '',
    postalCode: '',
    address: '',
    Date: '',
    phoneNumber: '',
    productName: product.name
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, cardNumber, size, cvv, postalCode, address, Date, phoneNumber, productName } = formData;
    
    if (!fullName || !cardNumber || !size || !cvv || !postalCode || !address || !Date || !phoneNumber || !productName) {
      toast.error("Veuillez remplir tous les champs du formulaire", {
        position: "top-center"
      });
      return;
    }
  
    console.log("Form Data:", formData);
    console.log("Selected Product:", product);
  
    try {
      const response = await axios.post('http://localhost:5000/api/submit-form', formData);
      console.log('Server Response:', response.data);
      toast.success("Message Envoyé", {
        position: "top-center",
      });
      onClose();
    } catch (error) {
      toast.error("Désolé, une erreur s'est produite lors de l'envoi de votre message", {
        position: "top-center"
      });
      onClose();
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg mx-4 mt-40 mb-28">
        <h2 className="text-2xl font-bold mb-4">Acheter {product.name}</h2>
        <form onSubmit={handleSubmit} className=''>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="fullName">
                <FaUser className="mr-2" /> Nom complet (comme indiqué sur la carte)*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Entrez votre nom complet"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="cardNumber">
                <FaCreditCard className="mr-2" /> Numéro de carte *
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                maxLength={16}
                minLength={16}
                pattern="\d{16}"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="size">
                <FaRuler className="mr-2" /> Taille *
              </label>
              <select
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Sélectionnez la taille</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="cvv">
                <FaLock className="mr-2" /> CVV *
              </label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="3 chiffres au dos de la carte (Visa, MC) ou 4 chiffres à l'avant (AmEx)"
                maxLength={3}
                minLength={3}
                pattern="\d{3}"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="postalCode">
                <FaMapMarkerAlt className="mr-2" /> Code postal *
              </label>
              <input
                type="number"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Entrez votre code postal"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="address">
                <FaMapMarkerAlt className="mr-2" /> Adresse *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Entrez votre adresse"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="phoneNumber">
                <FaPhone className="mr-2" /> Numéro de téléphone *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Entrez votre numéro de téléphone"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="Date">
                <FaMoneyBill className="mr-2" /> Date *
              </label>
              <input
                type="date"
                name="Date"
                value={formData.Date}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Montant"
                min={today} 
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 flex items-center"
            >
              <i className="fas fa-check mr-2"></i>
              Envoyer
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
              onClick={onClose}
            >
              <i className="fas fa-times mr-2"></i>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyNow;
