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
import { motion } from "framer-motion";

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
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={icon.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Socials;
