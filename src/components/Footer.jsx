import React from "react";
import { motion } from "framer-motion";
import { fadeInSection } from "../animations/variants";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="scroll-mt-24 bg-yellow-100 dark:bg-yellow-900 text-center py-10 mt-20 border-t dark:border-yellow-700"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInSection}
    >
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
        Contact me at: {" "}
        <a
          href="mailto:saikumarckr@gmail.com"
          className="underline hover:text-blue-600 dark:hover:text-purple-400"
        >
          saikumarckr@gmail.com
        </a>
      </p>

      <div className="flex justify-center gap-6 text-xl mb-4">
        <a
          href="https://www.linkedin.com/in/saikumar183"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:scale-125 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/sai.k.chowdary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:scale-125 transition-transform"
        >
          <FaInstagram />
        </a>
      </div>

      <p className="text-gray-500 dark:text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Saikumar — Hasta la vista
      </p>
    </motion.footer>
  );
};

export default Footer;