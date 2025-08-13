import React, { useState, useEffect } from "react";
import Buttoon from "./Buttoon";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full h-[80px] transition-all duration-500 ${
        isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-[70px] py-4">
        {/* Logo */}
        <h1
          className={`font-bold text-xl sm:text-2xl transition-colors duration-500 cursor-pointer ${
            isScrolled ? "text-white" : "text-white"
          }`}
          onClick={() => scrollToSection('hero')}
        >
          Abdelrahman Antar
        </h1>

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex space-x-6 lg:space-x-8 font-medium text-base lg:text-lg items-center transition-colors duration-500 ${
            isScrolled ? "text-white" : "text-white"
          }`}
        >
          <li className="hover:text-gray-300 cursor-pointer transition-colors" onClick={() => scrollToSection('hero')}>Home</li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors" onClick={() => scrollToSection('about')}>About</li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors" onClick={() => scrollToSection('projects')}>Portfolio</li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors" onClick={() => scrollToSection('contact')}>Contact</li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors" onClick={() => scrollToSection('blog')}>Blog</li>
          <Buttoon
            name="Download Cv"
            bgcolor="bg-white"
            textcolor="text-black"
          />
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white cursor-pointer z-[60] relative">
          {isMenuOpen ? (
            <CloseIcon onClick={() => setIsMenuOpen(false)} fontSize="large" />
          ) : (
            <MenuIcon onClick={() => setIsMenuOpen(true)} fontSize="large" />
          )}
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black/95 text-white flex flex-col items-center justify-center space-y-6 sm:space-y-8 transform transition-transform duration-500 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 55 }}
      >
        {/* Close button positioned absolutely in the menu */}
        <div className="absolute top-6 right-6 z-[60]">
          <CloseIcon 
            onClick={() => setIsMenuOpen(false)} 
            fontSize="large" 
            className="text-white cursor-pointer hover:text-gray-300 transition-colors"
          />
        </div>

        <li
          className="list-none hover:text-gray-300 cursor-pointer text-xl sm:text-2xl transition-colors"
          onClick={() => scrollToSection('hero')}
        >
          Home
        </li>
        <li
          className="list-none hover:text-gray-300 cursor-pointer text-xl sm:text-2xl transition-colors"
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li
          className="list-none hover:text-gray-300 cursor-pointer text-xl sm:text-2xl transition-colors"
          onClick={() => scrollToSection('projects')}
        >
          Portfolio
        </li>
        <li
          className="list-none hover:text-gray-300 cursor-pointer text-xl sm:text-2xl transition-colors"
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </li>
        <li
          className="list-none hover:text-gray-300 cursor-pointer text-xl sm:text-2xl transition-colors"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </li>
        <li
          className="list-none hover:text-gray-300 cursor-pointer text-xl sm:text-2xl transition-colors"
          onClick={() => scrollToSection('blog')}
        >
          Blog
        </li>
        <Buttoon
          name="Download Cv"
          bgcolor="bg-white"
          textcolor="text-black"
        />
      </div>
    </header>
  );
}

export default Navbar;
