import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[90vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[5px]">
              Cloud & DevOps Engineer
            </div>
            <h1 className="h1 mb-4">
              Hello, my name is Md. Asif Imtiyaj Chowdhury
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I'm a Cloud & DevOps Engineer specializing in AWS, Huawei, GCP,
              cloud platforms and container orchestration tools. I build
              scalable infrastructure with modern IaC tools and automate
              deployments to help businesses optimize cloud operations and
              accelerate software delivery.
            </p>
            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <a
                href="/resume/Flagship_v_Md__Asif_Imtiyaj_Chowdhury_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-x-2"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download Resume <Download size={18} />
                </Button>
              </a>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* Badge-1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Years of Experience"
            />
            {/* Badge-2 */}
            {/* <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={20}
              endCountText=''
              badgeText="Finished Projects"
            /> */}
            {/* Badge-3 */}
            {/* <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={6}
              endCountText=''
              badgeText="Happy clients"
            /> */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2" />
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/asif.png"
            />
          </div>
        </div>
        {/* arrowdown */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
