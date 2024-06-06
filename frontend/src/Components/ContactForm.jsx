import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import * as emailjs from 'emailjs-com';
import { AiOutlineGoogle, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FiSmartphone } from "react-icons/fi";

const Contact = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !phoneNumber || !email || !message) {
      toast.error("Veuillez remplir tous les champs du formulaire", {
        position: "top-center"
      });
      return;
    }

    const templateParams = {
      from_name: `${firstName} ${lastName}, ${email}`,
      phone_number: phoneNumber,
      email: email,
      message: message
    };

    emailjs.send('your_service_info', 'your_template_info', templateParams, '')
      .then((response) => {
        toast.success("Message Envoyé", {
          position: "top-center",
        });
        onClose();
      })
      .catch((error) => {
        toast.error("Désolé, une erreur s'est produite lors de l'envoi de votre message", {
          position: "top-center"
        });
        onClose();
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 z-50">
      <div className="relative text-white flex mx-auto my-8">
        <div className="hidden md:block text-slate-950 bg-gradient-to-b from-sky-500 via-gray-200 to-red-600  w-[380px] p-3 flex-col rounded-tl-3xl rounded-bl-3xl">
          <div className="flex items-center gap-3">
            <h3 className="font-bold">Souk Fashion</h3>
          </div>
          <p className="mt-8">Contactez-nous aux numéros suivants :</p>
          <div className="mt-5 flex gap-4">
            <FaPhone size={30} />
            <span>05 11 11 11 11</span>
          </div>
          <div className="mt-5 flex gap-4">
            <FiSmartphone size={30} />
            <span>06 00 00 00 00</span>
          </div>
          <div className="mt-5 flex gap-4">
            <FaEnvelope size={30} />
            <span>yourEmail</span>
          </div>
          <br />
          <br />
          <p className="mt-7">Ou contactez-nous sur nos réseaux sociaux ci-dessous:</p>
          <div className="flex gap-4 items-center mt-auto justify-center">
            <FaFacebook size={30} className="hover:text-purple-900 cursor-pointer" />
            <AiOutlineGoogle size={38} className="hover:text-purple-900 cursor-pointer" />
            <AiOutlineWhatsApp size={30} className="hover:text-purple-900 cursor-pointer" />
          </div>
        </div>
        <div className="form w-full md:w-[400px] shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-5 px-6 bg-gradient-to-b from-red-600 via-gray-200 to-sky-500 flex flex-col items-center justify-center gap-3 transition-all duration-300 rounded-tr-3xl rounded-br-3xl">
          <button onClick={onClose} className="p-2 focus:outline-none focus:scale-110 font-semibold text-xs py-2 hover:scale-110 transition-all hover:transiton text-cyan-50 bg-gradient-to-r from-purple-500 to-purple-900 shadow-red-200 shadow-lg absolute top-[11px] right-[4px] rounded-md hover-[#6a1e27]">
            <MdOutlineClose size={20} />
          </button>
          <div className="capitalize">
            <p className=" text-slate-900 font-bold pb-5 mr-10">Comment pouvons-nous vous aider?</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col items-start w-full">
                <label htmlFor="First_name" className="text-sm text-slate-900 font-bold">Nom:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Votre Nom" className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-indigo-800 placeholder:text-slate-600 focus:outline-none  text-gray-950 " />
              </div>
              <div className="flex flex-col items-start w-full">
                <label htmlFor="Last_name" className="text-sm text-gray-950 font-bold">Prénom:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Votre Prénom" className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-indigo-800 placeholder:text-gray-600 focus:outline-none text-gray-950 " />
              </div>
              <div className="flex flex-col items-start w-full">
                <label htmlFor="Phone_number" className="text-sm text-gray-950 font-bold">Numéro de téléphone:</label>
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Votre Numéro" onKeyDown={(e) => { if (e.key === 'Backspace' || e.key === 'Delete') { return; } if (!/^\d$/.test(e.key)) { e.preventDefault(); } }} className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-indigo-800 placeholder:text-gray-600 focus:outline-none text-gray-950 " />
              </div>
              <div className="flex flex-col items-start w-full">
                <label htmlFor="email" className="text-sm text-gray-950 font-bold">E-mail:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Votre E-mail" className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-indigo-800 placeholder:text-gray-600 focus:outline-none text-gray-950 " />
              </div>
              <div className="flex flex-col items-start w-full">
                <label htmlFor="message" className="text-sm text-gray-950 font-bold">Message:</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ecrivez votre message..." className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-indigo-800 placeholder:text-gray-600 focus:outline-none text-gray-950 " />
              </div>
              <div className="inline-flex gap-5 mx-auto">
                <button type="submit" className="px-6 focus:outline-none focus:scale-110 font-bold text-base py-2 rounded-[5px] hover:scale-110 transition-all hover:transiton text-cyan-50 bg-gradient-to-r from-purple-500 to-purple-900 shadow-blue-300 shadow-lg">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
