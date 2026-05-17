"use client";
import { motion } from "framer-motion";
import { MailIcon, HomeIcon, PhoneCall, Send, ArrowRight } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section className="pt-28 pb-20 min-h-screen relative overflow-hidden">
      <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="grid xl:grid-cols-2 mb-16 xl:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
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
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-no-repeat bg-contain bg-top" />
        </motion.div>

        <motion.div
          className="grid xl:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col gap-y-6">
            <div className="glass rounded-2xl p-6 flex items-center gap-x-6 border border-border/50 hover:border-primary/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MailIcon size={22} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="font-medium">asifimtiyajchowdhury@gmail.com</div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-center gap-x-6 border border-border/50 hover:border-primary/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <PhoneCall size={22} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Phone</div>
                <div className="font-medium">+8801748298776</div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-center gap-x-6 border border-border/50 hover:border-primary/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <HomeIcon size={22} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Location</div>
                <div className="font-medium">Dhaka, Bangladesh</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <Send size={20} className="text-primary" />
              <h3 className="text-xl font-semibold">Send a Message</h3>
            </div>
            <Form />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
