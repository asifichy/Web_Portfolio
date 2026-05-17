"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { useRef } from "react";

const projectData = [
  {
    image: "/work/3.png",
    category: "devops",
    name: "3-Tier Microservice Deployment",
    description: "Deployed a full 3-tier microservice web app using Docker containerization. React frontend serving a Node.js and Golang API layer backed by PostgreSQL database on AWS infrastructure.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "cloud",
    name: "Terraform - Huawei Cloud Provisioning",
    description: "Collaborated with Huawei's core backend team to debug and resolve underlying Go-based Terraform provider resource allocation bugs, unblocking critical infrastructure provisioning automations.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "devops",
    name: "GitOps CI/CD Pipeline",
    description: "Built a full GitOps pipeline using Jenkins and ArgoCD on AWS EKS, automating deployment workflows end-to-end with zero-downtime Canary deployments and automated rollbacks.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "cloud",
    name: "AI Video Analytics on Huawei Cloud",
    description: "Designed and deployed large-scale AI-driven intelligent video analytics configurations on Huawei Public Cloud (HCS/HCSO) for major enterprise accounts across Bangladesh and Sri Lanka.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "observability",
    name: "Unified Observability Stack",
    description: "Built a comprehensive monitoring ecosystem using Grafana, Prometheus, Loki, CloudWatch, and Middleware.io, implementing precise SLOs that reduced MTTD by 50%.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "devops",
    name: "AWS EKS Infrastructure",
    description: "Architected production-grade AWS infrastructure using EKS, DocumentDB, and ElastiCache clusters achieving 99.99% uptime while optimizing resource footprints to reduce cloud spend by 30%.",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projectData.filter((project) => {
    if (category === "all projects") {
      return project;
    } else {
      return project.category === category;
    }
  });

  return (
    <section className="min-h-screen pt-28 pb-20 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            My Projects
          </h2>
          <p className="subtitle text-center max-w-xl mx-auto mb-12">
            Real-world cloud infrastructure and DevOps projects I've designed, architected, and deployed.
          </p>
        </motion.div>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
          >
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none rounded-xl">
              {categories.map((cat, index) => (
                <TabsTrigger
                  onClick={() => setCategory(cat)}
                  key={index}
                  value={cat}
                  className="capitalize w-[162px] md:w-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                layout
              >
                <TabsContent value={category} className="mt-0">
                  <ProjectCard project={project} />
                </TabsContent>
              </motion.div>
            ))}
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
