import React from "react";
import ThemeToggle from "./ThemeToggle";
import useScrollSpy from "../hooks/useScrollSpy";

const Navbar = () => {
  const navItems = [
    { href: "about", label: "About" },
    { href: "projects", label: "Projects" },
    { href: "skills", label: "Skills" },
    { href: "contact", label: "Contact" },
  ];

  const activeId = useScrollSpy(navItems.map((item) => item.href));

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-4xl font-bold text-yellow-600 light:text-yellow-500">SK</div>
      <div className="flex gap-6 items-center text-gray-700 dark:text-gray-300">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={`#${item.href}`}
            className={`relative inline-block transition-transform duration-300 hover:scale-110 after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-0.5 after:left-0 after:-bottom-1 after:bg-blue-500 after:transition-all after:duration-300 ${
              activeId === item.href ? "text-blue-500 font-semibold" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;