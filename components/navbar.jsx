"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = ["home", "about", "projects", "contact"];
        let currentSection = "home";
  
        sections.forEach((section) => {
          const sectionElement = document.getElementById(section);
          if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              currentSection = section;
            }
          }
        });
  
        setActiveSection(currentSection);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Fauzan</h1>
        <ul className="flex space-x-6">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>

    
  );
};

export default Navbar;
