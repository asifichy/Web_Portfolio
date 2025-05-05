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
        icon: <Calender size={20} />,
        text: "Born on 28 July, 2000"
    },
    {
        icon: <GraduationCap size={20} />,
        text: "B.Sc in Computer Science and Engineering"
    },
    {
        icon: <Home size={20} />,
        text: "Dhaka, Bangladesh"
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'East West University',
                qualification: 'B.Sc in Computer Science and Engineering',
                year: '2019 - 2023',
            }
        ],
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Flagship Ltd',
                qualification: 'DevOps Engineer',
                year: 'Jan 2025 - Present',
            },
            {
                company: 'Huawei Technologies',
                qualification: 'Cloud Service Engineer',
                year: 'Mar 2024 - Dec 2024',
            },
            {
                company: 'Hexen',
                qualification: 'Software Engineer Intern (Web)',
                year: 'Feb 2024 - Mar 2024',
            },
        ],
    },
];

const skillsData = [
    {
        title: 'skills',
        data: [
            {
                name: 'AWS, Huawei',
            },
            {
                name: 'Cloud',
            },
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Frontend Development',
            },
            {
                name: 'Javascript, React, Next.js',
            },
            {
                name: 'Backend Development',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.png',
            },
        ],
    },
];

const About = () => {
  return <div>About</div>;
};

export default About;
