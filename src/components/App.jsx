import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
