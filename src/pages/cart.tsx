import React from 'react';
import { Seo } from '@/ui/components/seo/seo';
import { Navigation } from '@/ui/components/navigation/navigation';
import Cart from '@/ui/components/cart/cart'; // Import du composant Cart
import { useCart } from '@/ui/modules/cart-context/cart-context'; // Import du contexte du panier
import { Footer } from '@/ui/components/navigation/footer';

const CartPage: React.FC = () => {
  // Récupération du panier et des fonctions depuis le contexte
  const { cart, totalPrice, removeFromCart, updateQuantity } = useCart();
  
  if (!cart) {
    return <p>
      Chargement du panier...
          </p>;
            }

  return (
    <>
      <Seo title="Miam miam" description="Description..." />
      <Navigation />

      <div className="bg-orange-50 min-h-screen p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-orange-900 mb-8">Panier</h1>
          <Cart
            cart={cart}
            total={totalPrice}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;