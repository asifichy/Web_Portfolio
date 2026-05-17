"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send, ArrowRight, Cloud, Terminal, Code2, Cpu, Server, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import DevImg from "./DevImg";
import Socials from "./Socials";

const floatingIcons = [
  { Icon: Cloud, delay: 0, x: "8%", y: "15%", size: 40, opacity: 0.15 },
  { Icon: Terminal, delay: 1, x: "82%", y: "25%", size: 36, opacity: 0.12 },
  { Icon: Code2, delay: 2, x: "12%", y: "65%", size: 32, opacity: 0.1 },
  { Icon: Cpu, delay: 3, x: "75%", y: "70%", size: 28, opacity: 0.08 },
  { Icon: Server, delay: 4, x: "50%", y: "85%", size: 34, opacity: 0.06 },
  { Icon: Globe, delay: 5, x: "90%", y: "50%", size: 30, opacity: 0.1 },
];

const roles = [
  "Cloud Solution Architect",
  "DevOps Engineer",
  "Infrastructure Automation Expert",
  "Multi-Cloud Strategist"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const currentFullText = roles[currentRole];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <motion.div style={{ opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5 dark:from-primary/10 dark:via-transparent dark:to-orange-500/10" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" style={{ animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite", animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />

        {floatingIcons.map(({ Icon, delay, x, y, size, opacity }, i) => (
          <motion.div
            key={i}
            className="absolute hidden lg:block text-primary"
            style={{ left: x, top: y, opacity }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6 + delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={size} strokeWidth={1} />
          </motion.div>
        ))}

        <motion.div
          className="absolute top-32 right-20 hidden xl:block"
          style={{ y: y2 }}
        >
          <div className="grid grid-cols-3 gap-4 opacity-20">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row justify-between gap-x-8 items-center">
          <motion.div
            className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left"
            style={{ y: y1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm uppercase font-semibold mb-6 text-primary tracking-[3px]">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            <motion.h1
              className="h1 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Hello, I'm{" "}
              <span className="text-gradient">Asif Imtiyaj</span>
            </motion.h1>

            <motion.div
              className="h-8 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-xl md:text-2xl font-medium text-muted-foreground">
                {displayedText}
                <span className="inline-block w-[3px] h-6 bg-primary ml-1 animate-pulse" />
              </span>
            </motion.div>

            <motion.p
              className="subtitle max-w-[490px] mx-auto xl:mx-0 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Cloud Solution Architect specializing in multi-cloud design,
              automated infrastructure governance, and DevOps transformation.
              I architect scalable systems that drive business velocity.
            </motion.p>

            <motion.div
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link href="/contact">
                <Button className="gap-x-2 group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground/60 text-[22px] hover:text-primary transition-all hover:-translate-y-1 inline-block"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden xl:flex relative"
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="absolute top-[10%] -left-16 w-32 h-32 border border-primary/20 rounded-full" style={{ animation: "spin 20s linear infinite" }} />
            <div className="absolute bottom-[20%] -right-8 w-20 h-20 border-2 border-primary/10 rounded-full" style={{ animation: "spin 15s linear infinite reverse" }} />

            <motion.div
              className="absolute -top-8 -left-8 w-40 h-40 border border-primary/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2" style={{ animation: "float 6s ease-in-out infinite" }} />
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/asif.png"
            />
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
