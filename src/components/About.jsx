// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-20 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        I’m Saikumar, a Clean Energy Processes master’s student with a passion
        for sustainable materials, machine learning, and energy systems. My
        research blends chemical engineering with data science to solve
        real-world energy problems.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
        My goal is to create innovative, data-driven solutions for energy
        storage, solar technology, and semiconductor systems—bridging academic
        research and real-world applications.
      </p>
    </section>
  );
};

export default About;
