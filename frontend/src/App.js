import React, { useState } from "react";
import Navbar from './Components/Navbar';
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Accessories from './Sections/Accessories.jsx';
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import Services from "./Sections/Services.jsx";
import ShoppingCart from "./Sections/AddCart.jsx";
import Feature from './Sections/Feature.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="home">
      <Navbar cart={cart} setShowCart={setShowCart} />
      <ToastContainer />
      <Hero />
      <Products addToCart={addToCart} />
      <Accessories addToCart={addToCart}/>
      <About />
      <Services />
      <Feature />
      <Footer />
      {showCart && <ShoppingCart cart={cart} setShowCart={setShowCart} />}

    </div>
  );
}

export default App;
