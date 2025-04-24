import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { Container } from "../seo/container/container";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Typography } from "@/ui/design-system/typography/typography";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useAuth(); // 🔥 Récupération de l'utilisateur

  return (
    <nav className="bg-gray-500 text-white py-4">
      <Container className="flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <Typography variant="h1" theme="primary" weight="medium" className="cursor-pointer">
            🍽 Miam miam
          </Typography>
        </Link>

        {/* Liens de navigation (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-900">
            <Typography variant="h3" theme="black">🏠 Home</Typography>
          </Link>
          <Link href="/menu" className="hover:text-gray-900">
            <Typography variant="h3" theme="black">🍽 Menu</Typography>
          </Link>
          <Link href="/orders" className="hover:text-gray-900">
            <Typography variant="h3" theme="black">🛒 Orders</Typography>
          </Link>
          <Link href="/about"className="hover:text-gray-900">
            <Typography variant="h3" theme="black">📞 About-us</Typography>
          </Link>
        </div>

        {/* Icônes à droite */}
        <div className="flex items-center space-x-4">

          {/* Panier */}
          <Link href="/cart" className="text-xl relative">
            <FaShoppingCart style={{color: "#FB4C0D"}} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">2</span>
          </Link>

          {/* Profil, Connexion et Déconnexion */}
          {user ? (
            <div className="flex space-x-3 items-center">
              <Link href="/profile">
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  Profil
                </button>
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <div className="flex space-x-3">
              <Link href="/sign-in">
                <button className="bg-gray-700 text-white px-4 py-2 rounded">
                  Se connecter
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  S'inscrire
                </button>
              </Link>
            </div>
          )}

          {/* Bouton Menu Burger (Mobile) */}
          <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </Container>

      {/* Menu Mobile */}
      {isOpen && (
        <Container className="md:hidden flex flex-col space-y-4 mt-4 text-center">
          <Link href="/" className="hover:text-gray-900">
            <Typography variant="h3" theme="black">🏠 Home</Typography>
          </Link>
          <Link href="/menu" className="hover:text-gray-900">
            <Typography variant="h3" theme="black">🍽 Menu</Typography>
          </Link>
          <Link href="/orders" className="hover:text-gray-900">
            <Typography variant="h3" theme="black">🛒 Orders</Typography>
          </Link>
          <Link href="/about"className="hover:text-gray-900">
            <Typography variant="h3" theme="black">📞 About-us</Typography>
          </Link>
        </Container>
      )}
    </nav>
  );
};