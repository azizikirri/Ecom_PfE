import React, { useEffect } from "react";
import Image3 from '../assets/men/Image3.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const About = () => {

  const controlsText1 = useAnimation();
  const [refText1, inViewText1] = useInView();

  const controlsText2 = useAnimation();
  const [refText2, inViewText2] = useInView();

  const controlsText3 = useAnimation();
  const [refText3, inViewText3] = useInView();

  const controlsImage = useAnimation();
  const [refImage, inViewImage] = useInView();

  useEffect(() => {
    if (inViewText1) {
      controlsText1.start("visible");
    } else {
      controlsText1.start("hidden");
    }

    if (inViewText2) {
      controlsText2.start("visible");
    } else {
      controlsText2.start("hidden");
    }

    if (inViewText3) {
      controlsText3.start("visible");
    } else {
      controlsText3.start("hidden");
    }

    if (inViewImage) {
      controlsImage.start("visible");
    } else {
      controlsImage.start("hidden");
    }
  }, [controlsText1, inViewText1, controlsText2, inViewText2, controlsText3, inViewText3, controlsImage, inViewImage]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="About" className="bg-gradient-to-b from-fuchsia-300 via-blue-400 to-blue-900 min-h-screen p-4 flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4 p-9">
        <div className="flex items-center">
          <motion.h1
            className="text-4xl font-bold text-center lg:text-start text-gray-900"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
          À propos de nous :
          </motion.h1>
        </div>
        
        <motion.p
          ref={refText1}
          initial="hidden"
          animate={controlsText1}
          variants={fadeInUp}
          className="text-justify lg:text-start text-slate-900 font-bold"
        >
        Bienvenue chez SoukFashion : là où l'élégance marocaine rencontre la modernité !

        Chez SoukFashion, nous sommes fiers de vous proposer une sélection soigneusement élaborée de vêtements traditionnels marocains, d'accessoires et de services exquis qui incarnent le riche patrimoine culturel et l'élégance intemporelle du Maroc.
        </motion.p>

        <motion.p
          ref={refText2}
          initial="hidden"
          animate={controlsText2}
          variants={fadeInUp}
          className="text-justify lg:text-start text-slate-900 font-bold"
        >
        Vêtements Marocains Authentiques :

        Offrez-vous un confort luxueux avec notre collection de vêtements traditionnels marocains - des caftans artisanaux et des jabadors richement brodés, chacun étant un chef-d'œuvre de l'artisanat marocain conçu pour une grâce et une sophistication sans effort.
        </motion.p>

        <motion.p
          ref={refText3}
          initial="hidden"
          animate={controlsText3}
          variants={fadeInUp}
          className="text-justify lg:text-start text-slate-900 font-bold"
        >
        Accessoires Éclatants :

        Complétez votre look avec nos accessoires marocains - des bijoux artisanaux ornés de pierres précieuses vibrantes et de filigranes complexes, ou des babouches en cuir souple pour une combinaison parfaite de style et de confort.
        </motion.p>
        <motion.p
        ref={refText3}
        initial="hidden"
        animate={controlsText3}
        variants={fadeInUp}
        className="text-justify lg:text-start text-slate-900 font-bold"
      >
      
        Services d'Exception :

        Chez SoukFashion, nous accordons la priorité à votre satisfaction avec une navigation fluide, des transactions sécurisées et une livraison rapide, garantissant que vos trésors marocains arrivent en parfait état.
      </motion.p>
      <motion.p
      ref={refText3}
      initial="hidden"
      animate={controlsText3}
      variants={fadeInUp}
      className="text-justify lg:text-start text-slate-900 font-bold"
    >
   
    Découvrez la Magie du Maroc dès aujourd'hui :
    Découvrez l'élégance marocaine avec SoukFashion - magasinez maintenant pour ajouter un charme exotique à votre garde-robe !

    </motion.p>
      </div>

      <div className="w-full lg:w-3/4">
        <motion.img
          ref={refImage}
          initial="hidden"
          animate={controlsImage}
          variants={fadeInUp}
          className="rounded-lg h-[550px]"
          src={Image3} 
          alt="img"
        />
      </div>
      
    </div>
  );
};

export default About;
