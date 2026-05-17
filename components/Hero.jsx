"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send, ArrowRight, Cloud, Terminal, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import DevImg from "./DevImg";
import Socials from "./Socials";

const floatingIcons = [
  { Icon: Cloud, delay: 0, x: "10%", y: "20%" },
  { Icon: Terminal, delay: 1, x: "85%", y: "30%" },
  { Icon: Code2, delay: 2, x: "15%", y: "70%" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background dark:from-transparent dark:via-background/30 dark:to-background" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {floatingIcons.map(({ Icon, delay, x, y }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block text-primary/10"
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon size={48} strokeWidth={1} />
        </motion.div>
      ))}

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row justify-between gap-x-8 items-center">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm uppercase font-semibold mb-6 text-primary tracking-[3px]">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Cloud & DevOps Engineer
              </div>
            </motion.div>

            <motion.h1
              className="h1 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hello, I'm{" "}
              <span className="text-gradient">Md. Asif Imtiyaj Chowdhury</span>
            </motion.h1>

            <motion.p
              className="subtitle max-w-[490px] mx-auto xl:mx-0 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Cloud Solution Architect specializing in multi-cloud design, 
              automated infrastructure governance, and DevOps transformation. 
              I architect scalable systems that drive business velocity.
            </motion.p>

            <motion.div
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/contact">
                <Button className="gap-x-2 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <a href="/resume/Md__Asif_Imtiyaj_Chowdhury_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="gap-x-2 group">
                  <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground/60 text-[22px] hover:text-primary transition-all hover:-translate-y-1 inline-block"
              />
            </motion.div>
          </div>

          <motion.div
            className="hidden xl:flex relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 animate-float-slow" />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[400px] h-[400px] bg-no-repeat absolute -bottom-10 -left-20 opacity-50 animate-float" style={{ animationDelay: "2s" }} />
            <div className="absolute top-[10%] -left-16 w-32 h-32 border border-primary/20 rounded-full animate-spin-slow" />
            <div className="absolute bottom-[20%] -right-8 w-20 h-20 border-2 border-primary/10 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/asif.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
