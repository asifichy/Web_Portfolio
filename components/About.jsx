"use client";
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

import {
  User2,
  MailIcon,
  HomeIcon,
  GraduationCap,
  Briefcase,
  Award,
  Cloud,
  Code,
  Server,
  Database,
  Terminal,
  GitBranch,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

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
    icon: <HomeIcon size={20} />,
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
  }
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Cloud Platforms",
        icon: <Cloud size={18} />,
        items: ["AWS", "Huawei Cloud (HCS, HCSO)", "GCP"]
      },
      {
        name: "Infrastructure & DevOps",
        icon: <Server size={18} />,
        items: ["Linux", "Terraform", "Ansible", "Pulumi", "Docker", "Kubernetes", "CI/CD", "GitOps"]
      },
      {
        name: "Monitoring & Observability",
        icon: <Award size={18} />,
        items: ["Grafana", "Prometheus", "Loki", "CloudWatch", "Middleware.io", "Sentry"]
      },
      {
        name: "Web Technologies",
        icon: <Code size={18} />,
        items: ["ReactJS", "NextJS", "NodeJS", "ExpressJS", "HTML", "CSS"]
      },
      {
        name: "Databases",
        icon: <Database size={18} />,
        items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"]
      },
      {
        name: "Programming & Scripting",
        icon: <Terminal size={18} />,
        items: ["Python", "Bash", "JavaScript", "Java", "TypeScript", "C", "C++", "PHP", "Dart"]
      },
      {
        name: "Tools & Project Mgmt",
        icon: <GitBranch size={18} />,
        items: ["Git", "GitHub", "GitLab", "Agile", "SDLC", "RFP/RFQ Analysis"]
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
  const getData = (arr, title) => {
    return arr.find(item => item.title === title);
  };

  return (
    <section className="py-20 xl:py-32 relative overflow-hidden">
      <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.h2
          className="section-title mb-8 xl:mb-16 text-center mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About me
        </motion.h2>

        <div className="flex flex-col xl:flex-row gap-12">
          <motion.div
            className="hidden xl:flex flex-1 relative"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl" />
              <DevImg
                containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                imgSrc="/about/self_picture.png"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none rounded-xl">
                <TabsTrigger className="w-[162px] xl:w-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all" value="qualification">
                  Experience
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Cloud Solution Architect</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Cloud and DevOps Solutions Architect specializing in enterprise multi-cloud design, 
                      pre-sales technical strategy, and automated infrastructure governance.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0 glass rounded-xl p-4" key={index}>
                          <div className="text-primary p-2 bg-primary/10 rounded-lg">{item.icon}</div>
                          <div className="font-medium">{item.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qualification">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8 text-center xl:text-left">My Journey</h3>
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
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="h-[100px] w-[2px] bg-border relative ml-2">
                                  <div className="w-[12px] h-[12px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[100px] transition-all duration-700" />
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
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="h-[84px] w-[2px] bg-border relative ml-2">
                                  <div className="w-[12px] h-[12px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-700" />
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

                <TabsContent value="skills">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">Tools & Technologies I Use</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                      {getData(skillData, "skills").data.map((category, index) => (
                        <motion.div
                          key={index}
                          className="glass rounded-xl p-5"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="flex items-center gap-2 text-primary mb-3">
                            {category.icon}
                            <h5 className="font-semibold text-foreground">{category.name}</h5>
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
                            className="flex flex-col items-center gap-2 p-3 glass rounded-xl hover:bg-primary/5 transition-all duration-300 group cursor-default"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                            whileHover={{ y: -5 }}
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
