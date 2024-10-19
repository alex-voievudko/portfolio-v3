import { Button } from "@app/components/button";
import { JobItem } from "@app/components/job-item";
import jobs from "@app/data/jobs.json";
import React from "react";

export const Jobs = () => {
  return (
    <ul className="group/list flex flex-col gap-6">
      {jobs.map((job) => (
        <JobItem
          key={job.title}
          date={job.date}
          title={job.title}
          company={job.company}
          companyLink={job.companyLink}
          description={job.description}
          technologies={job.technologies}
        />
      ))}
      <div className="lg:p-4 flex w-full sm:justify-end">
        <Button href="/resume.pdf" className="flex justify-center items-center w-full">
          View Full Resume
        </Button>
      </div>
    </ul>
  );
};
