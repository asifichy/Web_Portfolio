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
  {
    icon: <PhoneCall size={20} />,
    text: "+8801748298776"
  },
  {
    icon: <MailIcon size={20} />,
    text: "asifimtiyajchowdhury@gmail.com"
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 28 July, 2000"
  },
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
        qualification: "B.Sc in Computer Science and Engineering",
        year: "2019 - 2023"
      }
    ]
  },
  {
    title: "experience",
    data: [
      {
        company: "Flagship Ltd",
        qualification: "DevOps Engineer",
        year: "Jan 2025 - Present"
      },
      {
        company: "Huawei Technologies",
        qualification: "Cloud Service Engineer",
        year: "Mar 2024 - Dec 2024"
      },
      {
        company: "Hexen",
        qualification: "Software Engineer Intern (Web)",
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
        name: "HTML, CSS"
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
          <div>
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/self_picture.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualification">Qualification</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* persoanl */}
                <TabsContent value="personal">Personal Info</TabsContent>
                <TabsContent value="qualification">
                  Qualification Info
                </TabsContent>
                <TabsContent value="skills">Skills</TabsContent>
                <TabsContent></TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
