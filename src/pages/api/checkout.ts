import { NextApiRequest, NextApiResponse } from 'next';
//const Stripe = require ('stripe');
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { items }: {items: {name:
      string;
      price: number;
      quantity: number;
    }[]} = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Panier vide' });
    }

    const line_items = items.map((item) => 
      ({
      price_data: {
        currency: 'eur',
        product_data: { name: item.name },
        unit_amount: item.price * 100, // Stripe utilise des centimes
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url:  `${req.headers.origin}/success `,
      cancel_url:  `${req.headers.origin}/cancel `,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création de la session de paiement' });
  }
}