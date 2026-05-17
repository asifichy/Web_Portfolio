"use client";
import { motion } from "framer-motion";
import { Cloud, Server, GitBranch, FileText } from "lucide-react";
import Link from "next/link";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

const stats = [
  { icon: <Cloud size={28} />, value: "3", label: "Cloud Platforms", desc: "AWS, Huawei, GCP" },
  { icon: <Server size={28} />, value: "5+", label: "Enterprise Deployments", desc: "Production-grade" },
  { icon: <GitBranch size={28} />, value: "99.99%", label: "Uptime Achieved", desc: "Infrastructure reliability" },
  { icon: <FileText size={28} />, value: "5", label: "Tech Docs Published", desc: "Knowledge sharing" },
];

const documentationLinks = [
  { title: "Huawei Cloud with Terraform", desc: "Provisioning guide for enterprise Huawei Cloud resources", link: "/" },
  { title: "Complete Docker Learnings", desc: "Comprehensive guide covering Docker from basics to production", link: "/" },
  { title: "Essential Linux Commands", desc: "Every DevOps engineer's command reference guide", link: "/" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />

      {/* Stats Section */}
      <section className="py-16 xl:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-orange-500/5" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl p-6 text-center border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl xl:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16 xl:py-24">
        <div className="container mx-auto">
          <motion.h2
            className="section-title mb-12 text-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Documentation & Knowledge
          </motion.h2>
          <p className="subtitle text-center max-w-xl mx-auto mb-12">
            I believe in sharing knowledge. Here are technical guides I&apos;ve created 
            to help the DevOps community.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {documentationLinks.map((doc, i) => (
              <motion.div
                key={i}
                className="glass rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <FileText size={20} />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{doc.title}</h3>
                <p className="text-sm text-muted-foreground">{doc.desc}</p>
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
