"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiGitlabFill,
  RiTwitterFill,
  RiMediumFill,
} from 'react-icons/ri';

import Link from "next/link";

const icons = [
  {
    path: "https://linkedin.com/in/asifimtiyaj",
    name: <RiLinkedinFill />
  },
  {
    path: "https://github.com/asifimtiyaj",
    name: <RiGithubFill />
  },
  {
    path: "https://gitlab.com/asifimtiyaj",
    name: <RiGitlabFill />
  },
  {
    path: "https://facebook.com/asifimtiyaj",
    name: <RiFacebookFill />
  },
  {
    path: "https://twitter.com/asifimtiyaj",
    name: <RiTwitterFill />
  },
  {
    path: "https://medium.com/@asifimtiyajchowdhury",
    name: <RiMediumFill />
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
