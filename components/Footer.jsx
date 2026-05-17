"use client";
import Socials from "./Socials";
import Link from "next/link";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white font-bold text-xl mb-4">Md. Asif Imtiyaj Chowdhury</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Cloud Solution Architect specializing in enterprise multi-cloud design,
              DevOps automation, and infrastructure governance.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Projects", "Contact"].map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                >
                  <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors text-sm">
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:asifimtiyajchowdhury@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm">
                <Mail size={14} />
                asifimtiyajchowdhury@gmail.com
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={14} />
                Dhaka, Bangladesh
              </div>
            </div>
            <Socials
              containerStyles="flex gap-x-4 mt-4"
              iconsStyles="text-white/40 hover:text-primary transition-all text-xl"
            />
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-white/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Md. Asif Imtiyaj Chowdhury. All rights reserved.
          </div>
          <motion.button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
