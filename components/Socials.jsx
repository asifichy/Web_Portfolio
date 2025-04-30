"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiGitlabFill,
  RiTwitterFill,
  RiMediumFill,
  RiNotionFill,
} from 'react-icons/ri';

import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <RiLinkedinFill />
  },
  {
    path: "/",
    name: <RiGithubFill />
  },
  {
    path: "/",
    name: <RiGitlabFill />
  },
  {
    path: "/",
    name: <RiFacebookFill />
  },
  {
    path: "/",
    name: <RiTwitterFill />
  },
  {
    path: "/",
    name: <RiMediumFill />
  },
  {
    path: "/",
    name: <RiNotionFill />
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
