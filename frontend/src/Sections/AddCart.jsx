import React from "react";
import PropTypes from "prop-types";

const AddCart = ({ cart, setShowCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg overflow-y-auto w-[600px] h-[400px] flex flex-col">
        <h2 className="text-xl font-bold mb-4">Panier</h2>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cart.length === 0 ? (
            <p>Votre panier est vide</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="border overflow-hidden shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 card bg-[#15263F] rounded-xl p-2 space-y-4">
                <img src={item.img} alt={item.name} className="rounded-md transition hover:bg-cyan-300" />
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-xl transition hover:text-cyan-300">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          onClick={() => setShowCart(false)}
          aria-label="Fermer le panier"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

AddCart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  setShowCart: PropTypes.func.isRequired,
};

export default AddCart;
