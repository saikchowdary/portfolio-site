import React from 'react';
import RadarChart from './RadarChart';
import { motion } from 'framer-motion';
import { fadeInSection } from '../animations/variants';

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-12 px-4 bg-white-100 light:bg-white-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInSection}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-white-900 light:text-white">Skills</h2>
        <p className="text-sm text-white-600 dark:text-white-300">A quick glance at what I’m good at</p>
      </div>
      <div className="w-full max-w-sm mx-auto">
        <RadarChart />
      </div>
    </motion.section>
  );
};

export default Skills;