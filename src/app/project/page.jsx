import ProjectCard from "@/components/ProjectCard";
import { PROJECT } from "@/utils/constant";

export default function Project() {
  return (
    <section className="flex flex-col gap-y-[64px]">
      <h2 className="font-bold text-[28px] pl-[2vw] pt-[60px] lg:pt-[100px] w-full lg:text-[36px]">
        Project
      </h2>
      {PROJECT.map((project, idx) => (
        <ProjectCard project={project} key={idx} />
      ))}
    </section>
  );
}
