import React from 'react';
import { motion } from 'framer-motion';
import { fadeInSection } from '../animations/variants';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-16 px-6 bg-yellow dark:bg-yellow-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInSection}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-black">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          I’m a Master’s student at FAU, passionate about clean energy systems, materials science, and applying machine learning to solve energy problems. I also build data-driven applications and interactive research tools.
        </p>
      </div>
    </motion.section>
  );
};

export default About;