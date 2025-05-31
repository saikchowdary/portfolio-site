import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      data-aos="fade-up"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
        Hi, I'm <span className="text-yellow-600 light:text-yellow-400">Saikumar</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
        MSc Clean Energy Processes | Machine Learning Enthusiast | Researcher
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-all light:bg-yellow-600 light:hover:bg-yellow-700"
      >
        View My Projects
      </a>
    </section>
  );
};

export default Hero;
