import { useRouter } from 'next/router';

const CancelPage = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <h1 className="text-4xl font-bold text-red-700">Paiement annulé</h1>
      <p className="text-lg text-gray-700 mt-4">Votre transaction n'a pas été complétée.</p>
      <button 
        onClick={() => router.push('/checkout')}
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded"
      >
        Réessayer
      </button>
    </div>
  );
};

export default CancelPage;