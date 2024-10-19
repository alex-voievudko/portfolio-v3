"use client";
import { ProjectItem } from "@app/components/project-item";
import projects from "@app/data/projects.json";
import React from "react";

export const ProjectsList = () => {
  const [preview, setPreview] = React.useState<string | null>(null);

  return (
    <ul className="group/list flex flex-col gap-6">
      {projects.map((project) => (
        <ProjectItem
          key={project.title}
          title={project.title}
          description={project.description}
          preview={project.preview}
          github={project.github}
          live={project.live}
          technologies={project.technologies}
          onImageClick={(image) => setPreview(image)}
        />
      ))}
    </ul>
  );
};
