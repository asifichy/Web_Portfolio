"use client";
import { Terminal, Cloud, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const servicesData = [
  {
    icon: <Cloud size={48} strokeWidth={1.2} />,
    title: "Cloud Infrastructure",
    description:
      "Design and implement scalable multi-cloud solutions on AWS, Huawei Cloud, and GCP. Enterprise-grade architectures with high availability, disaster recovery, and FinOps optimization.",
    highlights: ["Multi-cloud Architecture", "High Availability", "Cost Optimization"]
  },
  {
    icon: <Terminal size={48} strokeWidth={1.2} />,
    title: "DevOps Engineering",
    description:
      "End-to-end CI/CD pipelines, GitOps workflows, containerization with Docker & Kubernetes, and Infrastructure as Code using Terraform, Ansible, and Pulumi.",
    highlights: ["CI/CD & GitOps", "Container Orchestration", "Infrastructure as Code"]
  },
  {
    icon: <Code size={48} strokeWidth={1.2} />,
    title: "Web Development",
    description:
      "Modern full-stack applications with React, Next.js, Node.js, and Express.js. Performance-optimized with SSR, code-splitting, and responsive design patterns.",
    highlights: ["React & Next.js", "Full-Stack Development", "Performance Optimization"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  return (
    <section className="py-20 xl:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.h2
          className="section-title mb-16 xl:mb-24 text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>

        <motion.div
          className="grid xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass rounded-2xl p-8 h-full flex flex-col border border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.highlights.map((h, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link">
                  Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
