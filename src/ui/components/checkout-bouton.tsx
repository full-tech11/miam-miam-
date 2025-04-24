import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import type { MenuItem } from '@/ui/modules/menu/menu'; // Assure-toi que le chemin est correct

export type CartItem = MenuItem & {quantity: number};
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || 'pk_test_51R17iDHCSHUexgf9Wz0YJhfOWQooHVF3bhJT5Nd3Arw7VGgYD3P4Y2uAcuM4cKGIUFxRkAnfWmUXZyXYp15ODx2f003FlfMzXb');

type CheckoutBoutonProps = {
  items: (MenuItem & { quantity: number })[]; // Ajout de la quantité pour chaque élément
};

const CheckoutBouton: React.FC<CheckoutBoutonProps> = ({ items }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe n’a pas été correctement initialisé.');
      }

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();
      if (response.ok && data.sessionId) {
        const result = await stripe.redirectToCheckout({ sessionId: data.sessionId });
        if (result.error) {
          console.error(result.error.message);
          alert('Erreur lors de la redirection vers le paiement.');
        }
      } else {
        console.error(data.error || 'Réponse invalide du serveur');
        alert('Erreur lors de la redirection vers le paiement.');
      }
    } catch (error) {
      console.error('Erreur de connexion avec le serveur', error);
      alert('Erreur de connexion avec le serveur.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      {loading ? 'Chargement...' : 'Payer'}
    </button>
  );
};

export default CheckoutBouton;