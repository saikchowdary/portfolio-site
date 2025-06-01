import React from 'react';
import { motion } from 'framer-motion';
import { fadeInSection } from '../animations/variants';
import LottieEnergy from './LottieEnergy';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-yellow-100 to-red-100 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInSection}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-500">Saikumar</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          Clean Energy | Machine Learning | Materials Science
        </p>
        <a
          href="#projects"
          className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition"
        >
          See My Work
        </a>
      </div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <LottieEnergy />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
