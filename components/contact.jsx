import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.h1 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <motion.p 
        className="text-lg mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        📧 Email: yourname@example.com
      </motion.p>

      <motion.p 
        className="text-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        🔗 Follow us:
      </motion.p>

      <div className="flex space-x-4 mt-2">
        {[
          { href: "https://facebook.com/yourpage", src: "/facebook-icon.png", alt: "Facebook" },
          { href: "https://twitter.com/yourhandle", src: "/twitter-icon.png", alt: "Twitter" },
          { href: "https://instagram.com/yourhandle", src: "/instagram-icon.png", alt: "Instagram" }
        ].map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
          >
            <Link href={item.href} target="_blank">
              <image src={item.src} alt={item.alt} className="w-10 h-10" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
