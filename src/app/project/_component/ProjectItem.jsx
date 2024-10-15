import React from "react";
import Image from "next/image";
import { PROJECT } from "@/utils/projectData";
import Link from "next/link";

const ProjectSection = () => (
  <div className="pt-[60px] lg:pt-[100px]">
    <h1 className="block w-[300px] font-bold text-[28px] lg:text-[36px]">
      Project
    </h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {PROJECT.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  </div>
);

const ProjectItem = ({ project }) => (
  <div key={project.id} className="bg-white bg-opacity-5 rounded-[30px] p-10">
    <h2 className="font-bold text-[24px] text-nowrap mb-[10px]">
      {project.name}
    </h2>
    {project.info.map((info, idx) => (
      <React.Fragment key={`info-${project.id}-${idx}`}>
        {info.link ? (
          <Link href={info.link}>{info.title}</Link>
        ) : (
          <span className="mr-2 font-light">{info.title}</span>
        )}

        {project.info.length - 1 !== idx && (
          <span className="mr-2 font-light"> |</span>
        )}
      </React.Fragment>
    ))}
    <h3>Description</h3>
    <p className="font-light">{project.description}</p>

    <h3>Tech Stack</h3>
    <ul className="flex gap-3">
      {project.techStacks.map((techStack, idx) => (
        <li className="font-light" key={`techStack-${project.id}-${idx}`}>
          #{techStack}
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
