
import '@/styles/globals.css'; // Importe les styles globaux
import type { AppProps } from 'next/app';
import { CartProvider } from '@/ui/modules/cart-context/cart-context'; // Importe le CartProvider
import { AuthProvider } from '@/context/auth-context';
import { ToastContainer } from 'react-toastify';
//import { ThemeProvider } from '@/ui/modules/cart-context/cart-context'; // Optionnel : pour gérer le mode sombre/clair
//import { ToastContainer } from 'react-toastify'; // Optionnel : pour les notifications
//import 'react-toastify/dist/ReactToastify.css'; // Styles pour les notifications

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AuthProvider>
      <CartProvider> {/* Enveloppe toute l'application avec CartProvider */}
        <ToastContainer />
        <Component {...pageProps} />
      </CartProvider>
      </AuthProvider>
  );
}
