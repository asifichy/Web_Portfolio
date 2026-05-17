"use client";
import { Terminal, Cloud, Code, ArrowRight, Zap, Shield, Layers } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const servicesData = [
  {
    icon: <Cloud size={48} strokeWidth={1.2} />,
    accentIcon: <Zap size={24} />,
    title: "Cloud Infrastructure",
    description:
      "Design and implement scalable multi-cloud solutions on AWS, Huawei Cloud, and GCP. Enterprise-grade architectures with high availability, disaster recovery, and FinOps optimization.",
    highlights: ["Multi-cloud Architecture", "High Availability", "Cost Optimization"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: <Terminal size={48} strokeWidth={1.2} />,
    accentIcon: <Layers size={24} />,
    title: "DevOps Engineering",
    description:
      "End-to-end CI/CD pipelines, GitOps workflows, containerization with Docker & Kubernetes, and Infrastructure as Code using Terraform, Ansible, and Pulumi.",
    highlights: ["CI/CD & GitOps", "Container Orchestration", "Infrastructure as Code"],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: <Code size={48} strokeWidth={1.2} />,
    accentIcon: <Shield size={24} />,
    title: "Web Development",
    description:
      "Modern full-stack applications with React, Next.js, Node.js, and Express.js. Performance-optimized with SSR, code-splitting, and responsive design patterns.",
    highlights: ["React & Next.js", "Full-Stack Development", "Performance Optimization"],
    gradient: "from-orange-500/20 to-red-500/20"
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 xl:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.h2
          className="section-title mb-16 xl:mb-24 text-center mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          My Services
        </motion.h2>

        <div className="grid xl:grid-cols-3 gap-8">
          {servicesData.map((item, index) => (
            <ServiceCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ item, index, isInView }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 20, y: y * -20 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative perspective-1000"
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 80, rotateX: 15 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      <motion.div
        className="relative glass rounded-2xl p-8 h-full flex flex-col border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
        animate={isHovered ? {
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
          scale: 1.02
        } : {
          rotateX: 0,
          rotateY: 0,
          scale: 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <motion.div
          className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-all duration-500 relative"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {item.icon}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary"
            initial={{ scale: 0 }}
            animate={isHovered ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.accentIcon}
          </motion.div>
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6 flex-1 relative z-10">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
          {item.highlights.map((h, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              {h}
            </motion.span>
          ))}
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link relative z-10">
          Learn More
          <motion.div
            animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Services;
