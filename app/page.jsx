'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/contact";
import { motion } from "framer-motion";


const projects = [
  {
    title: "Quiz Website",
    description: "Sebuah website kuis interaktif berbasis HTML, CSS, dan JavaScript.",
    image: "/quiz.jpeg",
  },
  {
    title: "Sixmath",
    description: "Website pembelajaran materi persamaan lingkaran",
    image: "/sixmath.jpeg",
  },
  {
    title: "E-Modul CTML",
    description: "Platform pembelajaran matematika berbasis CTML untuk meningkatkan motivasi siswa.",
    image: "/e-modul.jpeg",
  },
];


export default function Home() {
  const text = "Welcome to My Portfolio";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // Kecepatan ngetik
      return () => clearTimeout(timeout);
    }
  }, [index, text]);


  
    
  return (
    <main className="bg-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section dengan efek ngetik */}
      <section id="home" className="h-screen flex items-center justify-center">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayText} {/* Efek ngetik di sini */}
          <span className="animate-blink">|</span> {/* Cursor efek */}
        </motion.h1>
      </section>
      
      {/* About Section */}
      <motion.section
        id="about"
        className="h-screen flex flex-col items-center justify-center bg-white text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="max-w-2xl text-lg text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hi, I’m Fauzan! A passionate mathematics educator and web developer based
          in Indonesia. I love creating interactive learning experiences and building
          websites that enhance student engagement. I’m always eager to learn new
          technologies and improve my skills. Lets connect and create something
          amazing together!
        </motion.p>
      </motion.section>

      <section id="projects" className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="text-gray-600 mt-2">Beberapa proyek yang telah saya buat.</p>
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }} // Efek scaling saat hover
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image src={project.image} alt={project.title} width={400} height={300} />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <motion.section
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-white text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      
      <motion.p 
        className="max-w-2xl text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Interested in collaborating or have a question? Feel free to reach out to me!
      </motion.p>

      <Link href="/contact">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          Get in Touch
        </button>
      </Link>
    </motion.section>



    </main>
  );
}