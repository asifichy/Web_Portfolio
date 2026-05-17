"use client";
import Socials from "./Socials";
import Link from "next/link";
import { Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Md. Asif Imtiyaj Chowdhury</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Cloud Solution Architect specializing in enterprise multi-cloud design, 
              DevOps automation, and infrastructure governance.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-white/60 hover:text-primary transition-colors text-sm">Home</Link>
              <Link href="/projects" className="text-white/60 hover:text-primary transition-colors text-sm">Projects</Link>
              <Link href="/contact" className="text-white/60 hover:text-primary transition-colors text-sm">Contact</Link>
            </div>
          </div>
          <div>
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
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="text-white/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Md. Asif Imtiyaj Chowdhury. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
