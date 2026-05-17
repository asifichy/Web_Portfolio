"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import { useRef } from "react";

const documentationLinks = [
  { title: "Huawei Cloud with Terraform", desc: "Provisioning guide for enterprise Huawei Cloud resources", link: "/" },
  { title: "Complete Docker Learnings", desc: "Comprehensive guide covering Docker from basics to production", link: "/" },
  { title: "Essential Linux Commands", desc: "Every DevOps engineer's command reference guide", link: "/" },
  { title: "Cloud Project Management", desc: "Best practices for managing enterprise cloud migration projects", link: "/" },
  { title: "Agile DevOps Workflows", desc: "Implementing Agile methodologies in DevOps team environments", link: "/" },
];

export default function Home() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const docsRef = useRef(null);
  const isDocsInView = useInView(docsRef, { once: true, margin: "-100px" });

  const stats = [
    { icon: "☁️", value: "3", label: "Cloud Platforms", desc: "AWS, Huawei, GCP" },
    { icon: "🖥️", value: "5+", label: "Enterprise Deployments", desc: "Production-grade" },
    { icon: "🌿", value: "99.99%", label: "Uptime Achieved", desc: "Infrastructure reliability" },
    { icon: "👥", value: "6+", label: "Teams Led", desc: "Cross-functional leadership" },
    { icon: "🏆", value: "30%", label: "Cost Reduction", desc: "Cloud spend optimization" },
    { icon: "📄", value: "5", label: "Tech Docs Published", desc: "Knowledge sharing" },
  ];

  return (
    <main>
      <Hero />
      <About />
      <Services />

      <section ref={statsRef} className="py-16 xl:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-orange-500/5" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl p-6 text-center border border-border/50 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                animate={isStatsInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 15 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-3xl xl:text-4xl font-bold text-gradient mb-1"
                    initial={{ scale: 0 }}
                    animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={docsRef} className="py-16 xl:py-24">
        <div className="container mx-auto">
          <motion.h2
            className="section-title mb-12 text-center mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isDocsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            Documentation & Knowledge
          </motion.h2>
          <motion.p
            className="subtitle text-center max-w-xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isDocsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            I believe in sharing knowledge. Here are technical guides I've created
            to help the DevOps community.
          </motion.p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {documentationLinks.map((doc, i) => (
              <motion.div
                key={i}
                className="glass rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isDocsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: i * 0.15 + 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    📄
                  </motion.div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {doc.title}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">{doc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Work />
      <Reviews />
      <CTA />
    </main>
  );
}
