import React from "react";
import Image from "next/image";
import { PROJECT } from "@/utils/projectData";
import Link from "next/link";

const ProjectSection = () => (
  <div className="pt-[60px] lg:pt-[100px]">
    <h1 className="block w-[300px]">Project</h1>
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      {PROJECT.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  </div>
);

const ProjectItem = ({ project }) => (
  <div key={project.id} className="rounded-[30px] bg-white bg-opacity-5 p-10">
    <h2 className="mb-[10px] text-nowrap text-[24px] font-bold">
      {project.name}
    </h2>
    {project.info.map((info, idx) => (
      <React.Fragment key={`info-${project.id}-${idx}`}>
        {info.link ? (
          <Link href={info.link}>{info.title}</Link>
        ) : (
          <span className="mr-2">{info.title}</span>
        )}

        {project.info.length - 1 !== idx && <span className="mr-2"> |</span>}
      </React.Fragment>
    ))}
    <h3>Description</h3>
    <p>{project.description}</p>

    <h3 className="mb-3">Tech Stack</h3>
    <ul className="mb-10 flex flex-wrap gap-2">
      {project.techStacks.map((techStack, idx) => (
        <li key={`techStack-${project.id}-${idx}`}>
          <span className="block rounded-full border border-gray-200/50 bg-black px-3 py-1">
            {techStack}
          </span>
        </li>
      ))}
    </ul>
    <Image
      src="/assets/project/qshop_editor_pc.png"
      width={560}
      height={145}
      alt="큐샵 에디터 피씨"
    />
  </div>
);

export default ProjectSection;
