"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MailIcon, Send, ArrowRightIcon, MessageSquare, CheckCircle, XCircle, Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Message from ${formData.name} - Portfolio Contact`,
          from_name: "Asif's Portfolio"
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setShowModal(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setShowModal(true);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const closeModal = () => {
    setShowModal(false);
    setStatus("idle");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        <motion.div
          className="relative flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Input
            type="text"
            placeholder="Your Name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="pr-10"
          />
          <User size={20} className="absolute right-6 text-muted-foreground" />
        </motion.div>

        <motion.div
          className="relative flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Input
            type="email"
            placeholder="Your Email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="pr-10"
          />
          <MailIcon size={20} className="absolute right-6 text-muted-foreground" />
        </motion.div>

        <motion.div
          className="relative flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Textarea
            placeholder="Tell me about your project or idea..."
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="pr-10 min-h-[120px]"
          />
          <MessageSquare className="absolute right-6 top-4 text-muted-foreground" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            type="submit"
            className="flex items-center max-w-[180px] group relative overflow-hidden"
            disabled={status === "loading"}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              {status === "loading" ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Let's Talk
                  <ArrowRightIcon
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </span>
          </Button>
        </motion.div>
      </form>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="glass rounded-3xl p-8 max-w-md w-full border border-border/50 relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {status === "success" ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
                  <div className="relative z-10">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.4 }}
                      >
                        <CheckCircle size={48} className="text-green-500" />
                      </motion.div>
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold text-center mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Message Sent!
                    </motion.h3>

                    <motion.p
                      className="text-muted-foreground text-center mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Thank you, <span className="font-semibold text-foreground">{formData.name || "friend"}</span>! 
                      I've received your message and will get back to you within 24 hours.
                    </motion.p>

                    <motion.div
                      className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Sparkles size={16} className="text-green-500" />
                      <span className="text-sm text-green-600 dark:text-green-400">
                        A confirmation has been sent to your email
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button
                        onClick={closeModal}
                        className="w-full group relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Got it, thanks!
                          <CheckCircle size={16} />
                        </span>
                      </Button>
                    </motion.div>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10" />
                  <div className="relative z-10">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <XCircle size={48} className="text-red-500" />
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold text-center mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Oops! Something went wrong
                    </motion.h3>

                    <motion.p
                      className="text-muted-foreground text-center mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Couldn't send your message. Please try again or email me directly at{" "}
                      <a
                        href="mailto:asifimtiyajchowdhury@gmail.com"
                        className="text-primary hover:underline"
                      >
                        asifimtiyajchowdhury@gmail.com
                      </a>
                    </motion.p>

                    <motion.div
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        variant="outline"
                        onClick={closeModal}
                        className="flex-1"
                      >
                        Close
                      </Button>
                      <Button
                        onClick={() => {
                          closeModal();
                          setTimeout(() => handleSubmit(new Event("submit")), 300);
                        }}
                        className="flex-1 group relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">Try Again</span>
                      </Button>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Form;
