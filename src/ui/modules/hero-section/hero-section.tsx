import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 bg-white">
      {/* Texte à gauche */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-green-600 font-semibold text-sm md:text-base">Our New Menu</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">AFRICAN CHICKEN</h1>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Experience the vibrant flavours of Africa! Every bite tells a story of tradition,spice,and passion.
        </p>
        <button className="mt-6 px-6 py-3 bg-primary-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-800 transition-all">
          COMMANDER MAINTENANT
        </button>
      </div>

      {/* Image à droite */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/assets/images/svg/Ndoll.png" // Mets ici l'URL de ton image
          alt="African Chicken"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;