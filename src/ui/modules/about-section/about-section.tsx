import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-orange-900 mb-4">Notre histoire</h2>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto">
            Depuis 2010, nous nous engageons à offrir une expérience culinaire authentique et chaleureuse. Nos plats sont
            préparés avec des ingrédients frais et locaux, dans le respect des traditions africaines. Venez découvrir un
            voyage gustatif unique !
          </p>
          <img
            src="/images/restaurant-team.jpg" // Remplace par le chemin de ton image
            alt="Notre équipe"
            className="mt-8 rounded-lg shadow-md w-full max-w-2xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;