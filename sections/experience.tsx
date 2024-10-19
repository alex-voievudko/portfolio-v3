import { Jobs } from "@app/components/job-list";
import React from "react";

export const ExperienceSection = () => {
  return (
    <section id="experience" aria-label="Work experience" className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
      <div className="sticky z-50 top-0 -mx-6 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-4 lg:py-0 lg:bg-transparent lg:blur-none">
        <h2 className="text-lg text-secondary font-extrabold lg:font-semibold uppercase tracking-widest">
          Work experience
        </h2>
      </div>
      <div className="mt-4">
        <Jobs />
      </div>
    </section>
  );
};
