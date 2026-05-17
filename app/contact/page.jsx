"use client";
import { motion, useInView } from "framer-motion";
import { MailIcon, HomeIcon, PhoneCall, Send, ArrowRight } from "lucide-react";
import Form from "@/components/Form";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-28 pb-20 min-h-screen relative overflow-hidden">
      <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

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
          <div className="flex flex-col gap-y-6">
            {[
              { icon: <MailIcon size={22} />, label: "Email", value: "asifimtiyajchowdhury@gmail.com", delay: 0.1 },
              { icon: <PhoneCall size={22} />, label: "Phone", value: "+8801748298776", delay: 0.2 },
              { icon: <HomeIcon size={22} />, label: "Location", value: "Dhaka, Bangladesh", delay: 0.3 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 flex items-center gap-x-6 border border-border/50 hover:border-primary/20 transition-all"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: item.delay + 0.4 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="glass rounded-2xl p-8 border border-border/50"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Send size={20} className="text-primary" />
              <h3 className="text-xl font-semibold">Send a Message</h3>
            </motion.div>
            <Form />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
