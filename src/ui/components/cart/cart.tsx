import React from 'react';
import ProtectedRoute from '../protected-route/protected-route';
import CheckoutBouton from '../checkout-bouton';
import type { MenuItem } from '@/ui/modules/menu/menu'; // Import du type MenuItem
import {CartItem} from '@/ui/components/checkout-bouton';

interface CartProps {
  cart: MenuItem[];
  total: number;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, total, removeFromCart, updateQuantity }) => {
  // Vérification pour éviter les erreurs si total est NaN ou indéfini
  const totalAmount = isNaN(total) ? 0 : total;

  return (
    <ProtectedRoute>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-orange-900 mb-4">Panier</h2>

        {cart.length === 0 ? (
          <p className="text-orange-700">Votre panier est vide.</p>
        ) : (
          <>
            {/* Liste des articles du panier */}
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-orange-900">{item.name}</h3>
                    <p className="text-sm text-orange-700">{item.price.toFixed(2)} €</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      value={item.quantity || 1}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="w-16 px-2 py-1 border border-orange-300 rounded"
                      min="1"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                    >
                      Supprimer
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Affichage du total et du bouton de paiement */}
            <div className="mt-6">
              <p className="text-xl font-bold text-orange-900">
                Total : {totalAmount.toFixed(2)} €
              </p>

              {/* Bouton de paiement Stripe */}
              <CheckoutBouton items={cart as CartItem[]} />
            </div>
          </>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default Cart;