"use client";

import React from "react";
import Link from "next/link";
import { PROJECT } from "@/utils/projectData";
import EmblaCarousel from "./EmblaCarousel";
import MoveButton from "./MoveButton";

const ProjectSection = () => (
  <div className="pt-[100px] max-lg:pt-[40px]">
    <h1 className="block w-[300px]">Project</h1>
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      {PROJECT.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  </div>
);

const ProjectItem = ({ project }) => {
  return (
    <div key={project.id} className="bg-box flex flex-col">
      <div className="flex-1">
        <div className="flex items-center justify-between gap-10">
          <h2 className="mb-[10px] text-[24px] font-bold">{project.name}</h2>{" "}
          <MoveButton path={`/project/${project.id}`} />
        </div>
        <span className="mr-2">{project.info}</span>
        {project.links && (
          <div className="mb-5">
            <h3>Link</h3>
            {project.links.map((linkItem, idx) => (
              <>
                <Link
                  href={linkItem.link}
                  target="_blank"
                  key={`link-${project.id}-${idx}`}
                >
                  {linkItem.title}
                </Link>
                {project.links.length - 1 !== idx && (
                  <span className="mr-2"> |</span>
                )}
              </>
            ))}
          </div>
        )}
        <h3>Description</h3>
        <p className="mb-5">{project.description}</p>
      </div>
      <EmblaCarousel slides={project.images} />
    </div>
  );
};

export default ProjectSection;
