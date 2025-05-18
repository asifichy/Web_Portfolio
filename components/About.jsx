import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneIcon,
  GraduationCap,
  Calendar,
  Briefcase,
  PhoneCall,
  Home,
  University,
  Table
} from "lucide-react";
import { get } from "react-hook-form";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Md. Asif Imtiyaj Chowdhury"
  },
  // {
  //   icon: <PhoneCall size={20} />,
  //   text: "+8801748298776"
  // },
  {
    icon: <MailIcon size={20} />,
    text: "asifimtiyajchowdhury@gmail.com"
  },
  // {
  //   icon: <Calendar size={20} />,
  //   text: "Born on 28 July, 2000"
  // },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Sc in Computer Science and Engineering"
  },
  {
    icon: <Home size={20} />,
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
        company: "SPG Trust",
        role: "DevOps Engineer",
        year: "May 2025 - Present"
      },
      {
        company: "Flagship Ltd",
        role: "DevOps Engineer",
        year: "Jan 2025 - Present"
      },
      {
        company: "Huawei Technologies",
        role: "Cloud Service Engineer",
        year: "Mar 2024 - Dec 2024"
      },
      {
        company: "Hexen",
        role: "Software Engineer Intern (Web)",
        year: "Feb 2024 - Mar 2024"
      }
    ]
  }
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Cloud & DevOps",
        items: [
          "AWS",
          "Huawei Cloud",
          "GCP",
          "Linux System Administration",
          "Server Configuration",
          "Docker",
          "Kubernetes",
          "Terraform",
          "Jenkins",
          "Monitoring"
        ]
      },
      {
        name: "Web Development",
        items: [
          "HTML",
          "CSS",
          "React",
          "Next.js",
          "Node.js",
          "JavaScript",
          "PHP"
        ]
      },
      {
        name: "Database",
        items: ["MySQL", "MongoDB", "SQLite", "Oracle"]
      }
    ]
  },
  {
    title: "programming",
    data: [
      {
        name: "Programming Languages",
        items: ["C", "C++", "Java", "Python", "JavaScript", "PHP"]
      },
      {
        name: "Scripting Languages",
        items: ["Bash", "Python", "JavaScript"]
      }
    ]
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/images/aws.png",
        name: "AWS"
      },
      {
        imgPath: "/images/huawei.png",
        name: "Huawei Cloud"
      },
      {
        imgPath: "/images/docker.png",
        name: "Docker"
      },
      {
        imgPath: "/images/kubernetes.png",
        name: "Kubernetes"
      },
      {
        imgPath: "/images/jenkins.png",
        name: "Jenkins"
      },
      {
        imgPath: "/images/terraform.png",
        name: "Terraform"
      },
      {
        imgPath: "/images/git.png",
        name: "Git"
      },      
      {
        imgPath: "/images/bash.png",
        name: "bash"
      },
      {
        imgPath: "/images/github.png",
        name: "GitHub"
      },
      {
        imgPath: "/images/gitlab.png",
        name: "GitLab"
      },
      {
        imgPath: "/images/vs-code.png",
        name: "VS Code"
      },
      {
        imgPath: "/images/grafana.png",
        name: "Grafana"
      },
      {
        imgPath: "/images/prometheus.png",
        name: "Prometheus"
      },
      {
        imgPath: "/images/ansible.png",
        name: "Ansible"
      },
      {
        imgPath: "/images/linux.png",
        name: "Linux"
      },
      {
        imgPath: "/images/mongodb.png",
        name: "MongoDB"
      },
      {
        imgPath: "/images/mysql.png",
        name: "MySQL"
      },
      {
        imgPath: "/images/node-js.png",
        name: "Node.js"
      },
      {
        imgPath: "/images/dart.png",
        name: "Dart"
      },
      {
        imgPath: "/images/flutter.png",
        name: "Flutter"
      },
      {
        imgPath: "/images/arduino.png",
        name: "Arduino"
      },
      {
        imgPath: "/images/notion.png",
        name: "Notion"
      }
    ]
  }
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find(item => item.title === title);
  };

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mt-5 mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/self_picture.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* persoanl info */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Experience of 2 Years</h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I'm expeirenced with Cloud and Devops also in Web
                      Technologies
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">
                              {item.icon}
                            </div>
                            <div>
                              {item.text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    {/* <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Bengali</div>
                    </div> */}
                  </div>
                </TabsContent>
                {/* qualification info */}
                <TabsContent value="qualification">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* experience and education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* expeirence */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(
                            qualificationData,
                            "experience"
                          ).data.map((item, index) => {
                            const { company, role, year } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {year}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(
                            qualificationData,
                            "education"
                          ).data.map((item, index) => {
                            const { university, degree, year } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground">
                                    {degree}
                                  </div>
                                  <div className="text-base font-medium">
                                    {year}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skill info */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools and Technologies I Use</h3>
                    
                    {/* Skills Section */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {getData(skillData, "skills").data.map((category, index) => (
                          <div key={index} className="text-center xl:text-left">
                            <h5 className="font-medium mb-2">{category.name}</h5>
                            <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
                              {category.items.map((item, idx) => (
                                <span key={idx} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Programming Languages Section */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Programming Languages</h4>
                      <div className="border-b border-border mb-4" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {getData(skillData, "programming").data.map((category, index) => (
                          <div key={index} className="text-center xl:text-left">
                            <h5 className="font-medium mb-2">{category.name}</h5>
                            <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
                              {category.items.map((item, idx) => (
                                <span key={idx} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools Section */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tools & Technologies</h4>
                      <div className="border-b border-border mb-4" />
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                        {getData(skillData, "tools").data.map((item, index) => (
                          <div 
                            key={index} 
                            className="flex flex-col items-center gap-2 group hover:scale-110 transition-transform duration-300"
                          >
                            <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                              <Image
                                src={item.imgPath}
                                width={48}
                                height={48}
                                alt={item.name}
                                priority
                                className="object-contain"
                              />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
