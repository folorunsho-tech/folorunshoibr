import React from "react";
import Image from "next/image";
import { Oswald, Poppins } from "@next/font/google";
import Link from "next/link";

const oswald = Oswald({
  weight: ["200", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});
type ProjectCardProps = {
  img: {
    mobile: string;
    tablet: string;
    desktop: string;
    main: string;
  };
  name: string;
  tags: string[];
  link: string;
  category: string;
};
const ProjectCard = ({ img, name, tags, link, category }: ProjectCardProps) => {
  return (
    <div className="space-y-3">
      <Image
        src={img?.main}
        alt={name}
        className="w-auto h-auto object-cover"
        width={400}
        height={100}
      />
      <h2 className={`${oswald.className} text-3xl`}>{name}</h2>
      <p
        className={`${poppins.className} flex gap-4 items-center text-lg text-gray-400 pb-4`}
      >
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </p>
      <div className="flex items-center gap-12 pb-3">
        <Link
          href={link}
          target="_blank"
          className={`${oswald.className} text-xl pb-2 uppercase border-b border-b-purple-500 hover:border-b-purple-700 transition duration-150`}
        >
          View Project
        </Link>
        {category === "web development" && (
          <Link
            href={link}
            target="_blank"
            className={`${oswald.className} text-xl pb-2 uppercase border-b border-b-purple-500 hover:border-b-purple-700 transition duration-150`}
          >
            View Code
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
