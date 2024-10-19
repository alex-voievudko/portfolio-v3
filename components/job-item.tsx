"use client";
import { Chip } from "@app/components/chip";
import { useCursorContext } from "@app/hooks/useCursorContext";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type Props = {
  date: string;
  title: string;
  company: string;
  companyLink: string;
  description: string;
  technologies: string[] | null;
};

export const JobItem = ({ date, title, company, companyLink, description, technologies }: Props) => {
  const { onCursor } = useCursorContext();

  return (
    <li key={title}>
      <div
        onMouseEnter={onCursor}
        onMouseLeave={onCursor}
        className="group rounded grid lg:p-4 transition duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:bg-card/40 lg:hover:shadow-neutral-900/50 lg:hover:drop-shadow-md lg:group-hover/list:opacity-50"
      >
        <div
          className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-white/50 sm:col-span-2 lg:group-hover:text-primary lg:transition lg:duration-300"
          aria-label={date}
        >
          {date}
        </div>
        <div className="sm:col-span-6">
          <h3 className="font-medium leading-snug text-white mb-2">
            <a
              className="inline-flex items-center font-medium leading-tight text-white hover:text-primary focus-visible:text-primary transition duration-300 group/link text-lg"
              href={companyLink}
              target="_blank"
              rel="noreferrer"
              aria-label={title}
            >
              {title} · {company} <FaArrowUpRightFromSquare className="inline-block ml-2 text-xs" />
            </a>
          </h3>
          <ul>
            {description.split("\n").map((item, index) => (
              <li key={`${item.slice(0, 5)}-${index}`} className="text-sm leading-normal mb-2">
                {item}
              </li>
            ))}
          </ul>
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
