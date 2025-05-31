import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50 px-6 py-4 flex justify-between items-center">
      {/* Text Logo */}
      <div className="text-2xl font-bold text-yellow-600 light:text-yellow-400">SK</div>

      {/* Navigation Links */}
      <div className="space-x-6 text-gray-700 dark:text-gray-300">
        <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
