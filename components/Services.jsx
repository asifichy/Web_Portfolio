import { Terminal, Cloud, Code } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <Cloud size={72} strokeWidth={0.8} />,
    title: "Cloud Infrastructure",
    description:
      "I design and implement scalable cloud solutions that enhance system reliability, optimize performance, and reduce operational costs for businesses of all sizes.",
  },
  {
    icon: <Terminal size={72} strokeWidth={0.8} />,
    title: "DevOps Engineering",
    description:
      "I streamline your development pipeline with automated CI/CD processes, containerization, and infrastructure as code to accelerate delivery and improve software quality.",
  },
  {
    icon: <Code size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "I build modern, responsive web applications using React, Next.js, and other cutting-edge frontend tools, while implementing robust backend solutions with Node.js and Nest.js to create fast, secure, and scalable digital experiences.",
  },
];

const Services = () => {
  return (
    <section className="mt-10 xl:mt-20 mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white  dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className='text-lg'>{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
