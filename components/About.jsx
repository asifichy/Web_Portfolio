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
  University
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
        <h2 className="section-title mt-5 mb-8 xl:mb-16 text-center mx-auto">About me</h2>
      </div>
    </section>
  );
};

export default About;
