import React, { useState, useEffect } from "react";
import Logo from "../assets/Web3-Africa-Logo.png";
import LogoDark from "../assets/Web3-Africa-Logo-Dark.png";
import { ThemeToggle, useTheme } from "./ThemeToggle";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const { darkMode } = useTheme();

  // Automatically detect current path
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/events", label: "Events" },
  ];

  return (
    <nav className="flex items-center justify-between p-6 bg-white dark:bg-black transition-colors duration-200">
      <div className="flex items-center">
        <img
          src={darkMode ? LogoDark : Logo}
          alt="Web3 Africa Logo"
          className="transition-opacity duration-200"
        />
      </div>

      <div className="flex space-x-6 bg-[#FAFAFA] dark:bg-[#111111] py-2 px-2 font-archivo rounded-lg">
          {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`
              transition duration-300 
              ${
                activeLink === link.href
                  ? "text-[#222222] dark:text-white font-semibold"
                  : "text-[#B8B8B8] hover:text-black dark:hover:text-white"
              }
            `}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <ThemeToggle />

        <a
          href="/donate"
          className="text-[#B8B8B8] dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 pr-4"
        >
          Donate
        </a>
        <div className="h-6 border-l border-[#F2F2F2] dark:border-gray-700"></div>
        <button className="px-6 py-2 border border-[#EE3C22] text-[#EE3C22] dark:border-[#FF4D33] dark:text-[#FF4D33] rounded-3xl font-archivo hover:bg-[#EE3C22] hover:text-white dark:hover:bg-[#FF4D33] transition duration-200">
          Collab with us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
