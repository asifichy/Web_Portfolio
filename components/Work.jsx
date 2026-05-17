"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "DevOps",
    name: "3-Tier Microservice Deployment",
    description: "Deployed a 3-tier microservice web app using Docker with React frontend, Node.js & Golang API layer, and PostgreSQL database on AWS infrastructure.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Cloud",
    name: "Terraform - Huawei Cloud Provisioning",
    description: "Collaborated with Huawei's backend team to resolve Terraform provider issues and automate public cloud resource provisioning across enterprise accounts.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "DevOps",
    name: "GitOps CI/CD Pipeline",
    description: "Built a full GitOps pipeline using Jenkins and ArgoCD on AWS EKS, automating deployment workflows end-to-end with zero-downtime Canary deployments.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Cloud",
    name: "Multi-Cloud Architecture Design",
    description: "Architected enterprise-grade hybrid cloud solutions spanning AWS, Huawei Cloud, and GCP with comprehensive observability and disaster recovery.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 xl:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row gap-12">
          <motion.div
            className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left xl:h-[400px] flex flex-col justify-center items-center xl:items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-4">Latest Projects</h2>
            <p className="subtitle mb-8">
              Real-world infrastructure and cloud engineering projects I've designed and deployed.
            </p>
            <Link href="/projects">
              <Button className="gap-x-2 group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  View All Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="xl:max-w-[1000px] xl:flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Swiper
              className="h-[480px]"
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {projectData.map((project, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
