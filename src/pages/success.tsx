import { useRouter } from 'next/router';
import Link from 'next/link';

const SuccessPage = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-4xl font-bold text-green-700">Paiement réussi !</h1>
      <p className="text-lg text-gray-700 mt-4">Merci pour votre commande.</p>
      <button 
        onClick={() => router.push('/menu')}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded"
      >
        Retour au menu
      </button>
    </div>
  );
};

export default SuccessPage;