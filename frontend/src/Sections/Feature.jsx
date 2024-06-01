import { FiLifeBuoy, FiShoppingBag, FiLayers, FiBox, FiSettings, FiCheckCircle } from 'react-icons/fi';


const Feature = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-teal-100 via-orange-200 to-indigo-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Faites en sorte que chaque étape soit centrée sur notre clients</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-8 font-bold">Le confort de nos clients passe avant tout.</p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div className="md:p-8 lg:p-14">
            <FiLifeBuoy className="mx-auto w-12 h-12 text-gray-900" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Soutien</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Nous offrons un soutien client de qualité pour garantir votre satisfaction à chaque étape de votre achat.</p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-900">
            <FiShoppingBag className="mx-auto w-12 h-12 text-gray-900" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Ventes</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Nos équipes de vente sont dédiées à vous offrir une expérience d'achat agréable et personnalisée.</p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-900">
            <FiLayers className="mx-auto w-12 h-12 text-gray-900" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Intégration</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Nous intégrons les meilleures pratiques pour vous offrir des produits de qualité supérieure.</p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-900">
            <FiBox className="mx-auto w-12 h-12 text-gray-900" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Produit</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Nos produits sont conçus pour allier tradition et modernité, en offrant une qualité exceptionnelle.</p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-900 md:border-t">
            <FiSettings className="mx-auto w-12 h-12 text-gray-900" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Qualité</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Nous nous engageons à fournir des produits de haute qualité, respectant les traditions marocaines.</p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-900 md:border-t">
            <FiCheckCircle className="mx-auto w-12 h-12 text-gray-900" />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Résultat</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Nos efforts visent à offrir des résultats qui dépassent vos attentes, tant en matière de design que de qualité.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
