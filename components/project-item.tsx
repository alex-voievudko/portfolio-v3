"use client";
import { Chip } from "@app/components/chip";
import { useCursorContext } from "@app/hooks/useCursorContext";
import Image from "next/image";
import React from "react";
import { FaArrowUpRightFromSquare, FaGithub, FaLink } from "react-icons/fa6";

type Props = {
  title: string;
  description: string;
  preview: string;
  github: string | null;
  live: string;
  technologies: string[] | null;
  onImageClick: (image: string) => void;
};

export const ProjectItem = ({ title, description, preview, github, live, technologies, onImageClick }: Props) => {
  const { onCursor } = useCursorContext();

  return (
    <li key={title}>
      <div
        onMouseEnter={onCursor}
        onMouseLeave={onCursor}
        className=" group rounded grid lg:p-4 transition duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:bg-card/40 lg:hover:shadow-neutral-900/50 lg:hover:drop-shadow-md lg:group-hover/list:opacity-50"
      >
        <Image
          className="cursor-pointer rounded mb-2 mt-1 object-cover border-2 border-white/10 lg:group-hover:border-primary lg:transition lg:duration-300 sm:col-span-2 sm:order-1"
          src={preview}
          alt={title}
          width={560}
          height={360}
          loading="lazy"
          onClick={() => onImageClick(preview)}
        />
        <div className="sm:col-span-6 sm:order-2">
          <h3 className="font-medium leading-snug text-white mb-2">
            <a
              className="inline-flex items-center font-medium leading-tight text-white hover:text-primary focus-visible:text-primary transition duration-300 group/link text-lg"
              href={live}
              target="_blank"
              rel="noreferrer"
              aria-label={title}
            >
              {title} <FaArrowUpRightFromSquare className="inline-block ml-2 text-xs" />
            </a>
          </h3>
          <p className="text-sm leading-normal mb-4">{description}</p>
          <div className="flex gap-6 mb-4">
            {github && (
              <a
                className=" inline-flex items-center font-regular text-sm leading-tight text-primary hover:text-primary focus-visible:text-primary transition duration-300 group/link"
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <FaGithub
                  className="inline-block mr-2 text-sm text-white group-hover/link:text-primary transition duration-300"
                  size={18}
                />
                Github
              </a>
            )}
            {live && (
              <a
                className="inline-flex items-center font-regular leading-tight text-sm text-primary hover:text-primary focus-visible:text-primary transition duration-300 group/link"
                href={live}
                target="_blank"
                rel="noreferrer"
                aria-label="Live"
              >
                <FaLink
                  className="inline-block mr-2 text-sm text-white group-hover/link:text-primary transition duration-300"
                  size={18}
                />
                Demo
              </a>
            )}
          </div>
          {technologies && (
            <ul className="flex flex-wrap gap-1.5 pointer-events-none" aria-label="Technologies used">
              {technologies.map((technology, index) => (
                <Chip key={`${technology}-${index}`} technology={technology} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
};
