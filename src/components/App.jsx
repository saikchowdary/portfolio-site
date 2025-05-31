import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;