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
        year: "2019 - 2023"
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

const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "AWS, Huawei"
      },
      {
        name: "Cloud"
      },
      {
        name: "HTML, CSS, Tailwind"
      },
      {
        name: "Frontend Development"
      },
      {
        name: "Javascript, React, Next.js"
      },
      {
        name: "Backend Development"
      }
    ]
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/public/images/html.png"
      },
      {
        imgPath: "/public/images/css.png"
      },
      {
        imgPath: "/public/images/js.png"
      },
      {
        imgPath: "/public/images/php.png"
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
                  Qualification
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
                  <div className="text-center xl:text-left">Skills</div>
                </TabsContent>
                <TabsContent />
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
