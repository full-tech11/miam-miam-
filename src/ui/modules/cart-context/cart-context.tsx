import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { MenuItem } from '../menu/menu';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Définition du type pour un élément du panier
type CartItem = MenuItem &{
  quantity: number;
};

// Définition du type pour le contexte
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

// Création du contexte
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Fournisseur du contexte
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Chargement du panier depuis localStorage au démarrage
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Sauvegarde le panier dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Fonction pour ajouter un élément au panier
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Incrémente la quantité si l'article existe déjà
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // Ajoute un nouvel article avec une quantité initiale de 1
      return [...prevCart, { ...item, quantity: 1 }];
    });

    //Affiche la notification

    toast.success(`${item.name} aggiunto nel carrello!`, {
       position: "top-right",
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover:true,
       draggable: true,
       theme: "light",
    });
  };

  // Fonction pour supprimer un élément du panier
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Fonction pour mettre à jour la quantité d'un élément dans le panier
  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Fonction pour vider le panier
  const clearCart = () => {
    setCart([]);
  };

  // Calcul du nombre total d'articles dans le panier (mémoïsation)
  const totalItems = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  // Calcul du prix total du panier (mémoïsation)
  const totalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};