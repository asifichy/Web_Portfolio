import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Gitlab, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%]">
            <Image className="absolute bottom-0 shadow-2xl" src={project.image} alt="" width={250} height={250} />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
