import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useCart } from '@/ui/modules/cart-context/cart-context'; // Importe useCart depuis ton contexte
import Link from 'next/link'; // Importe Link pour la navigation

// Définition des types pour les plats
type Speciality = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isFeatured?: boolean;
};

// Données des spécialités africaines
const specialities: Speciality[] = [
  {
    id: 1,
    name: 'Thiébou Dieune',
    description: 'Riz parfumé au poisson, légumes frais et sauce tomate, un classique sénégalais.',
    price: 14.5,
    image: '/assets/images/svg/img1.png',
    category: 'Plats Emblématiques',
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Poulet Yassa',
    description: 'Poulet mariné au citron et oignons, servi avec du riz blanc.',
    price: 12.0,
    image: '/assets/images/svg/img2.png',
    category: 'Plats Emblématiques',
    isFeatured: true,
  },
  {
    id: 3,
    name: 'Mafé',
    description: 'Une sauce riche à base d’arachide, accompagnée de viande tendre et de légumes.',
    price: 13.0,
    image: '/assets/images/svg/img3.png',
    category: 'Sauces et Accompagnements',
  },
  {
    id: 4,
    name: 'Brochettes d’Agneau',
    description: 'Brochettes marinées aux épices africaines, grillées à la perfection.',
    price: 10.5,
    image: '/assets/images/svg/img4.png',
    category: 'Grillades et Brochettes',
  },
  {
    id: 5,
    name: 'Bissap',
    description: 'Boisson rafraîchissante à base de fleurs d’hibiscus, sucrée et parfumée.',
    price: 4.0,
    image: '/assets/images/svg/img5.png',
    category: 'Boissons Traditionnelles',
  },
];

const SpecialitiesSlider: React.FC = () => {
  const { addToCart } = useCart(); // Utilise le hook useCart pour accéder à la fonction addToCart

  // Fonction pour ajouter un plat au panier
  const handleAddToCart = (speciality: Speciality) => {
    addToCart({
      id: speciality.id,
      name: speciality.name,
      price: speciality.price,
      quantity: 1, // Par défaut, on ajoute 1 unité du plat
      description: speciality.description,
      image: speciality.image,
      category: speciality.category,
    });
  };

  return (
    <section className="bg-orange-50 py-12">
      <div className="container mx-auto px-4">
        {/* Titre et sous-titre */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-orange-900 mb-2">Voyagez à travers les saveurs de l'Afrique</h2>
          <p className="text-lg text-orange-700">
            Découvrez nos plats traditionnels préparés avec des ingrédients authentiques et une touche d'amour.
          </p>
        </motion.div>

        {/* Carrousel des spécialités */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop
            className="mySwiper"
          >
            {specialities.map((speciality) => (
              <SwiperSlide key={speciality.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={speciality.image}
                    alt={speciality.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-orange-900 mb-2">{speciality.name}</h3>
                    <p className="text-sm text-orange-700 mb-4">{speciality.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-orange-900">{speciality.price.toFixed(2)} €</span>
                      <button
                        onClick={() => handleAddToCart(speciality)} // Ajoute le plat au panier
                        className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition text-sm"
                      >
                        Ajouter au panier
                      </button>
                    </div>
                    {speciality.isFeatured && (
                      <div className="mt-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                          Chef's recommandation
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Boutons de navigation personnalisés */}
          <div className="swiper-button-next bg-white p-3 rounded-full shadow-md hover:bg-orange-50 transition"></div>
          <div className="swiper-button-prev bg-white p-3 rounded-full shadow-md hover:bg-orange-50 transition"></div>
        </motion.div>

        {/* Bouton "Voir plus" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link href="/menu">
            <a className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition text-sm">
              Voir plus
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialitiesSlider;