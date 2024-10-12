import Layout from "../../components/ui/Layout";
import ProjectCard from "../../components/projectPage/ProjectCard";
import { PROJECT } from "../../constant";

export default function Project() {
    return (
        <Layout>
            <section className='flex flex-col gap-y-[64px]'>
                <h2 className='font-bold text-[28px] pl-[2vw] pt-[60px] lg:pt-[100px] w-full lg:text-[36px]'>Project</h2>
                {PROJECT.map((project, idx) => (
                    <ProjectCard project={project} key={idx} />
                ))}
            </section>
        </Layout>
    );
}

