"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const links = [
    { label: language === "fr" ? "À propos" : "About", href: "#about" },
    { label: language === "fr" ? "Compétences" : "Skills", href: "#skills" },
    { label: language === "fr" ? "Expérience" : "Experience", href: "#experience" },
    { label: language === "fr" ? "Contact" : "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-12 text-white relative z-50">
      {/* Logo */}
      <div className="font-bold text-xl">Mohamed Aziz</div>

      {/* Links Desktop */}
      <div className="hidden md:flex gap-8 text-lg">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-[#a5c9ff] transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Language toggle */}
      <div className="hidden md:flex items-center gap-2">
        <button
          onClick={() => setLanguage("en")}
          className={`text-xs px-2 py-1 rounded border ${
            language === "en"
              ? "border-[#a5c9ff] text-[#a5c9ff]"
              : "border-white/10 text-white/70"
          }`}
        >
          🇬🇧 EN
        </button>
        <button
          onClick={() => setLanguage("fr")}
          className={`text-xs px-2 py-1 rounded border ${
            language === "fr"
              ? "border-[#a5c9ff] text-[#a5c9ff]"
              : "border-white/10 text-white/70"
          }`}
        >
          🇫🇷 FR
        </button>
      </div>

      {/* CV button (desktop) */}
      <a
        href="/cv_security-6.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block"
      >
        <button className="border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300">
          {language === "fr" ? "CV" : "CV"}
        </button>
      </a>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile side menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64
          bg-white/10 backdrop-blur-md flex flex-col items-center gap-6 py-12
          md:hidden transition-transform duration-[1000ms] ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage("en")}
            className={`text-xs px-2 py-1 rounded border ${
              language === "en"
                ? "border-[#a5c9ff] text-[#a5c9ff]"
                : "border-white/10 text-white/70"
            }`}
          >
            🇬🇧 EN
          </button>
          <button
            onClick={() => setLanguage("fr")}
            className={`text-xs px-2 py-1 rounded border ${
              language === "fr"
                ? "border-[#a5c9ff] text-[#a5c9ff]"
                : "border-white/10 text-white/70"
            }`}
          >
            🇫🇷 FR
          </button>
        </div>

        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white hover:text-[#a5c9ff] transition-colors duration-300 text-xl"
            onClick={() => setIsOpen(false)} // close menu on click
          >
            {link.label}
          </a>
        ))}

        <a href="/cv_security-6.pdf" target="_blank" rel="noopener noreferrer">
          <button className="border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-[#a5c9ff] hover:text-black transition-all duration-300">
            CV
          </button>
        </a>
      </div>
      
    </nav>
  );
};

export default Navbar;
