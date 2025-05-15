"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

//import swiper style
import "swiper/css";
import "swiper/css/pagination";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper react components
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "reeact js",
    name: "Nexa Website",
    description: "A website for a company that provides services to the public",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "reeact js",
    name: "Nexa Website",
    description: "A website for a company that provides services to the public",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "reeact js",
    name: "Nexa Website",
    description: "A website for a company that provides services to the public",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "reeact js",
    name: "Nexa Website",
    description: "A website for a company that provides services to the public",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "reeact js",
    name: "Nexa Website",
    description: "A website for a company that provides services to the public",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest projects</h2>
          <p className="subtitle mb-8">
            Here are some of the projects I've worked on
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* sliders */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            sliderPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0.4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
