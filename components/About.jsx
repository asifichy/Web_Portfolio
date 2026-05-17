"use client";
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import {
  User2,
  MailIcon,
  GraduationCap,
  Briefcase,
  Trophy,
  Cloud,
  Code,
  Server,
  Database,
  Terminal,
  GitFork,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Md. Asif Imtiyaj Chowdhury"
  },
  {
    icon: <MailIcon size={20} />,
    text: "asifimtiyajchowdhury@gmail.com"
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Sc in Computer Science and Engineering"
  },
  {
    icon: <User2 size={20} />,
    text: "Dhaka, Bangladesh"
  }
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "East West University",
        degree: "B.Sc in Computer Science and Engineering",
        year: "2023"
      }
    ]
  },
  {
    title: "experience",
    data: [
      {
        company: "Huawei Technologies",
        role: "Cloud Solution Architect",
        year: "Dec 2025 - Present"
      },
      {
        company: "Flagship Digital Ltd",
        role: "Lead DevOps Engineer",
        year: "Jan 2025 - Dec 2025"
      },
      {
        company: "SPG Trust",
        role: "DevOps & Infrastructure Consultant",
        year: "May 2025 - Nov 2025"
      },
      {
        company: "Huawei Technologies",
        role: "Cloud Service Engineer",
        year: "Mar 2024 - Dec 2024"
      },
      {
        company: "Hexen",
        role: "Software Engineer Intern (Web)",
        year: "Feb 2024 - Apr 2024"
      }
    ]
  },
  {
    title: "project management",
    data: [
      {
        project: "Enterprise Multi-Cloud Migration",
        role: "Technical Project Lead",
        year: "Led cross-functional team of 6+ engineers"
      },
      {
        project: "AWS EKS Production Deployment",
        role: "DevOps Project Manager",
        year: "Achieved 99.99% uptime, 30% cost reduction"
      },
      {
        project: "Huawei Cloud Enterprise Tenders",
        role: "Pre-Sales Technical Lead",
        year: "Managed HLD/LLD, BoQ, SoC documentation"
      },
      {
        project: "Observability Stack Implementation",
        role: "Infrastructure Project Lead",
        year: "Reduced MTTD by 50%, MTTR by 50%"
      },
      {
        project: "GitOps CI/CD Pipeline",
        role: "Automation Project Manager",
        year: "Zero-downtime Canary deployments on EKS"
      }
    ]
  }
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Cloud Platforms",
        icon: <Cloud size={18} />,
        items: ["AWS", "Huawei Cloud (HCS, HCSO)", "GCP"],
        level: 95
      },
      {
        name: "Infrastructure & DevOps",
        icon: <Server size={18} />,
        items: ["Linux", "Terraform", "Ansible", "Pulumi", "Docker", "Kubernetes", "CI/CD", "GitOps"],
        level: 92
      },
      {
        name: "Monitoring & Observability",
        icon: <Trophy size={18} />,
        items: ["Grafana", "Prometheus", "Loki", "CloudWatch", "Middleware.io", "Sentry"],
        level: 88
      },
      {
        name: "Web Technologies",
        icon: <Code size={18} />,
        items: ["ReactJS", "NextJS", "NodeJS", "ExpressJS", "HTML", "CSS"],
        level: 85
      },
      {
        name: "Databases",
        icon: <Database size={18} />,
        items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
        level: 82
      },
      {
        name: "Programming & Scripting",
        icon: <Terminal size={18} />,
        items: ["Python", "Bash", "JavaScript", "Java", "TypeScript", "C", "C++", "PHP", "Dart"],
        level: 80
      },
      {
        name: "Tools & Project Mgmt",
        items: ["Git", "GitHub", "GitLab", "Agile", "SDLC", "RFP/RFQ Analysis"],
        level: 90
      },
      {
        name: "Project & Product Management",
        icon: <Trophy size={18} />,
        items: ["Agile & Scrum", "Stakeholder Management", "Technical Documentation", "RFP/RFQ Analysis", "Cross-functional Leadership", "Product Strategy", "Team Mentoring"],
        level: 88
      }
    ]
  }
];

const toolIcons = [
  { imgPath: "/images/aws.png", name: "AWS" },
  { imgPath: "/images/huawei.png", name: "Huawei Cloud" },
  { imgPath: "/images/docker.png", name: "Docker" },
  { imgPath: "/images/kubernetes.png", name: "Kubernetes" },
  { imgPath: "/images/jenkins.png", name: "Jenkins" },
  { imgPath: "/images/terraform.png", name: "Terraform" },
  { imgPath: "/images/git.png", name: "Git" },
  { imgPath: "/images/bash.png", name: "Bash" },
  { imgPath: "/images/github.png", name: "GitHub" },
  { imgPath: "/images/gitlab.png", name: "GitLab" },
  { imgPath: "/images/grafana.png", name: "Grafana" },
  { imgPath: "/images/prometheus.png", name: "Prometheus" },
  { imgPath: "/images/ansible.png", name: "Ansible" },
  { imgPath: "/images/linux.png", name: "Linux" },
  { imgPath: "/images/mongodb.png", name: "MongoDB" },
  { imgPath: "/images/mysql.png", name: "MySQL" },
  { imgPath: "/images/node-js.png", name: "Node.js" },
  { imgPath: "/images/python.png", name: "Python" },
  { imgPath: "/images/dart.png", name: "Dart" },
  { imgPath: "/images/flutter.png", name: "Flutter" },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getData = (arr, title) => {
    return arr.find(item => item.title === title);
  };

  return (
    <section ref={ref} className="py-20 xl:py-32 relative overflow-hidden">
      <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.h2
          className="section-title mb-8 xl:mb-16 text-center mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About me
        </motion.h2>

        <div className="flex flex-col xl:flex-row gap-12">
          <motion.div
            className="hidden xl:flex flex-1 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[505px] h-[505px]">
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-full h-full bg-primary/5 rounded-2xl"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/about/self_picture.png"
                  alt="Asif"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Tabs defaultValue="personal" onValueChange={setActiveTab}>
              <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[700px] xl:border dark:border-none rounded-xl">
                <TabsTrigger className="w-[162px] xl:w-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all" value="qualification">
                  Experience
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all" value="project-mgmt">
                  Project Mgmt
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <motion.h3
                      className="h3 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeTab === "personal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    >
                      Cloud Solution Architect & Project Manager
                    </motion.h3>
                    <motion.p
                      className="subtitle max-w-xl mx-auto xl:mx-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeTab === "personal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    >
                      Cloud and DevOps Solutions Architect with expertise in enterprise multi-cloud design,
                      pre-sales technical strategy, automated infrastructure governance, and project/product management.
                    </motion.p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <motion.div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0 glass rounded-xl p-4 border border-border/50"
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={activeTab === "personal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.3)" }}
                        >
                          <div className="text-primary p-2 bg-primary/10 rounded-lg">{item.icon}</div>
                          <div className="font-medium">{item.text}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qualification">
                  <div className="text-center xl:text-left">
                    <motion.h3
                      className="h3 mb-8 text-center xl:text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeTab === "qualification" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    >
                      My Journey
                    </motion.h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary mb-6">
                          <Briefcase />
                          <h4 className="capitalize font-medium">Experience</h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map((item, index) => {
                            const { company, role, year } = item;
                            return (
                              <motion.div
                                className="flex gap-x-8 group"
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={activeTab === "qualification" ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 5 }}
                              >
                                <div className="h-[100px] w-[2px] bg-border relative ml-2">
                                  <motion.div
                                    className="w-[12px] h-[12px] rounded-full bg-primary absolute -left-[5px]"
                                    whileHover={{ scale: 1.5 }}
                                  />
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-1">{company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-1">{role}</div>
                                  <div className="text-sm font-medium text-primary">{year}</div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary mb-6">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">Education</h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map((item, index) => {
                            const { university, degree, year } = item;
                            return (
                              <motion.div
                                className="flex gap-x-8 group"
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={activeTab === "qualification" ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                                whileHover={{ x: 5 }}
                              >
                                <div className="h-[84px] w-[2px] bg-border relative ml-2">
                                  <motion.div
                                    className="w-[12px] h-[12px] rounded-full bg-primary absolute -left-[5px]"
                                    whileHover={{ scale: 1.5 }}
                                  />
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-1">{university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-1">{degree}</div>
                                  <div className="text-sm font-medium text-primary">{year}</div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="project-mgmt">
                  <div className="text-center xl:text-left">
                    <motion.h3
                      className="h3 mb-8 text-center xl:text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeTab === "project-mgmt" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    >
                      Project & Product Management
                    </motion.h3>
                    <motion.p
                      className="subtitle max-w-xl mx-auto xl:mx-0 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeTab === "project-mgmt" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    >
                      Experienced in leading cross-functional teams, managing enterprise cloud migrations, 
                      and driving product strategy across multi-cloud environments.
                    </motion.p>
                    
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary mb-6">
                          <Briefcase />
                          <h4 className="capitalize font-medium">Key Projects</h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "project management").data.map((item, index) => {
                            const { project, role, year } = item;
                            return (
                              <motion.div
                                className="flex gap-x-8 group"
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={activeTab === "project-mgmt" ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 5 }}
                              >
                                <div className="h-[100px] w-[2px] bg-border relative ml-2">
                                  <motion.div
                                    className="w-[12px] h-[12px] rounded-full bg-primary absolute -left-[5px]"
                                    whileHover={{ scale: 1.5 }}
                                  />
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-1">{project}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-1">{role}</div>
                                  <div className="text-sm font-medium text-primary">{year}</div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary mb-6">
                          <Trophy size={28} />
                          <h4 className="capitalize font-medium">PM Expertise</h4>
                        </div>
                        <div className="flex flex-col gap-y-4">
                          {[
                            { skill: "Agile & Scrum", level: 90 },
                            { skill: "Stakeholder Management", level: 88 },
                            { skill: "Technical Documentation", level: 92 },
                            { skill: "RFP/RFQ Analysis", level: 85 },
                            { skill: "Cross-functional Leadership", level: 87 },
                            { skill: "Product Strategy", level: 82 },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="glass rounded-xl p-4 border border-border/50"
                              initial={{ opacity: 0, y: 20 }}
                              animate={activeTab === "project-mgmt" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-sm">{item.skill}</span>
                                <span className="text-sm font-medium text-primary">{item.level}%</span>
                              </div>
                              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={activeTab === "project-mgmt" ? { width: `${item.level}%` } : { width: 0 }}
                                  transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills">
                  <div>
                    <motion.h3
                      className="h3 mb-8 text-center xl:text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeTab === "skills" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    >
                      Tools & Technologies I Use
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                      {getData(skillData, "skills").data.map((category, index) => (
                        <motion.div
                          key={index}
                          className="glass rounded-xl p-5 border border-border/50"
                          initial={{ opacity: 0, y: 30 }}
                          animate={activeTab === "skills" ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.3)" }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2 text-primary">
                              {category.icon}
                              <h5 className="font-semibold text-foreground">{category.name}</h5>
                            </div>
                            <span className="text-sm font-medium text-primary">{category.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-muted rounded-full mb-3 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={activeTab === "skills" ? { width: `${category.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                            />
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {category.items.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-center xl:text-left">Technology Stack</h4>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                        {toolIcons.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex flex-col items-center gap-2 p-3 glass rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={activeTab === "skills" ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                          >
                            <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                              <Image
                                src={item.imgPath}
                                width={36}
                                height={36}
                                alt={item.name}
                                className="object-contain"
                              />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground text-center leading-tight">
                              {item.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
