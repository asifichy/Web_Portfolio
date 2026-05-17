"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 xl:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-tertiary dark:via-secondary/40 to-orange-500/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="glass rounded-3xl p-12 xl:p-20 text-center max-w-4xl mx-auto border border-border/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <motion.div
            className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-20 h-20 bg-orange-500/10 rounded-full"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={16} />
            Let's collaborate
          </motion.div>

          <h2 className="h2 max-w-2xl mx-auto mb-6">
            Ready to transform your{" "}
            <span className="text-gradient">cloud infrastructure</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Let's collaborate to architect scalable solutions, automate your deployments,
            and accelerate your digital transformation journey.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="gap-x-2 group text-base relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Start a Conversation
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <a
              href="/resume/Md__Asif_Imtiyaj_Chowdhury_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-x-2 group text-base border-primary/20 hover:bg-primary/5">
                View Resume
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
