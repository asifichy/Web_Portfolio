"use client";
import { motion, useInView } from "framer-motion";
import { MailIcon, HomeIcon, PhoneCall, Send, ArrowRight, Clock, Globe, Linkedin, Github, MessageCircle } from "lucide-react";
import Form from "@/components/Form";
import { useRef } from "react";
import Link from "next/link";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: <MailIcon size={22} />,
      label: "Email",
      value: "asifimtiyajchowdhury@gmail.com",
      link: "mailto:asifimtiyajchowdhury@gmail.com",
      delay: 0.1,
      color: "from-red-500/10 to-orange-500/10"
    },
    {
      icon: <PhoneCall size={22} />,
      label: "Phone",
      value: "+8801748298776",
      link: "tel:+8801748298776",
      delay: 0.2,
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <HomeIcon size={22} />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      link: null,
      delay: 0.3,
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Clock size={22} />,
      label: "Response Time",
      value: "Within 24 hours",
      link: null,
      delay: 0.4,
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <Globe size={22} />,
      label: "Availability",
      value: "Open for opportunities",
      link: null,
      delay: 0.5,
      color: "from-yellow-500/10 to-orange-500/10"
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/asifimtiyaj",
      delay: 0.6,
      color: "from-blue-600/10 to-blue-500/10"
    },
  ];

  return (
    <section className="pt-28 pb-20 min-h-screen relative overflow-hidden">
      <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" style={{ animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite", animationDelay: "1.5s" }} />

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          className="grid xl:grid-cols-2 mb-16 xl:mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col justify-center">
            <motion.div
              className="flex items-center gap-x-4 text-primary text-lg mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </motion.div>
            <h1 className="h1 max-w-md mb-6">
              Let's{" "}
              <span className="text-gradient">Work Together</span>.
            </h1>
            <p className="subtitle max-w-[400px] text-base">
              Have a project in mind or want to discuss cloud architecture?
              I'm always open to new opportunities and collaborations.
              Let's build something great together.
            </p>

            <motion.div
              className="flex items-center gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="https://linkedin.com/in/asifimtiyaj" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 hover:border-primary/30 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} className="text-primary" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </motion.div>
              </Link>
              <Link href="https://github.com/asifimtiyaj" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 hover:border-primary/30 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} className="text-primary" />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-no-repeat bg-contain bg-top"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="grid xl:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4 }}
            >
              Get in Touch
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((item, index) => (
                <motion.div
                  key={index}
                  className={`glass rounded-2xl p-5 border border-border/50 hover:border-primary/20 transition-all relative overflow-hidden group cursor-pointer`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: item.delay + 0.4 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => item.link && window.open(item.link, "_blank")}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-medium text-sm">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="glass rounded-2xl p-8 border border-border/50 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />

            <motion.div
              className="flex items-center gap-3 mb-6 relative z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Send size={20} />
              </motion.div>
              <h3 className="text-xl font-semibold">Send a Message</h3>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-sm mb-6 relative z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              Fill out the form below and I'll get back to you within 24 hours.
            </motion.p>

            <Form />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
