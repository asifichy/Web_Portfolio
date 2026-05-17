"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group overflow-hidden relative glass border-border/50 hover:border-primary/30 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: 2 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="shadow-2xl"
              src={project.image}
              alt=""
              width={247}
              height={250}
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          <motion.div
            className="absolute flex gap-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={project.link}
              className="bg-white/90 w-[54px] h-[54px] rounded-full flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <Link2Icon size={20} />
            </Link>
            <Link
              href={project.github}
              className="bg-white/90 w-[54px] h-[54px] rounded-full flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <Github size={20} />
            </Link>
          </motion.div>
        </div>
      </CardHeader>
      <div className="px-8 py-6 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        >
          <Badge className="uppercase text-sm font-medium mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">
            {project.category}
          </Badge>
        </motion.div>
        <h4 className="h4 mb-1 mt-2 group-hover:text-primary transition-colors duration-300">{project.name}</h4>
        <p className="text-muted-foreground text-base leading-relaxed">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
