import React, { useState } from 'react';
import { useCart } from '@/ui/modules/cart-context/cart-context'; // Importe useCart depuis ton contexte

// Définition des types pour les plats
export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity?: number;
};

// Données des plats du menu
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Thiébou Dieune',
    description: 'Riz parfumé au poisson, légumes frais et sauce.',
    price: 14.5,
    image: '/assets/images/svg/img1.png',
    category: 'Plats Principaux',
  },
  {
    id: 2,
    name: 'Poulet Yassa',
    description: 'Poulet mariné au citron et oignons, servi avec du riz.',
    price: 12.0,
    image: '/assets/images/svg/img2.png',
    category: 'Plats Principaux',
  },
  {
    id: 3,
    name: 'Mafé',
    description: 'Une sauce riche à base d’arachide, accompagnée de viande tendre et de légumes.',
    price: 13.0,
    image: '/assets/images/svg/img3.png',
    category: 'Plats Principaux',
  },
  {
    id: 4,
    name: 'Brochettes d’Agneau',
    description: 'Brochettes marinées aux épices africaines, grillées à la perfection.',
    price: 10.5,
    image: '/assets/images/svg/img4.png',
    category: 'Grillades',
  },
  {
    id: 5,
    name: 'Bissap',
    description: 'Boisson rafraîchissante à base de fleurs d’hibiscus, sucrée et parfumée.',
    price: 4.0,
    image: '/assets/images/svg/img5.png',
    category: 'Boissons',
  },
  {
    id: 6,
    name: 'Thé à la menthe',
    description: 'Thé vert infusé avec de la menthe fraîche et du sucre.',
    price: 3.5,
    image: '/assets/images/svg/Ndoll.png',
    category: 'Boissons',
  },
];

const MenuSection: React.FC = () => {
  const { addToCart } = useCart(); // Utilise le hook useCart pour accéder à la fonction addToCart
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous'); // État pour la catégorie sélectionnée
  const [message, setMessage] = useState('');

  // Fonction pour ajouter un plat au panier
  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1, // Par défaut, on ajoute 1 unité du plat
      description: item.description,
      image: item.image,
      category: item.category,
    });
    setMessage(`"${item.name}" aggiunto nel carello !`);
    setTimeout(() => setMessage(''),
  3000);
  };

  // Filtre les plats par catégorie
  const filteredItems = selectedCategory === 'Tous'
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  return (
    
    <section className="bg-orange-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-900 mb-8 text-center">Notre Menu</h2>

        {/* Filtres par catégorie */}
        <div className="flex justify-center space-x-4 mb-8">
          {['Tous', 'Plats Principaux', 'Grillades', 'Boissons'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-orange-500 border border-orange-500'
              } hover:bg-orange-600 hover:text-white transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Liste des plats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-orange-900 mb-2">{item.name}</h3>
                <p className="text-sm text-orange-700 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-orange-900">{item.price.toFixed(2)} €</span>
                  <button
                    onClick={() => handleAddToCart(item)} // Ajoute le plat au panier
                    className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition text-sm"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {message && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50">
          {message}
        </div>
      )}
    </section>
  );
};

export default MenuSection;