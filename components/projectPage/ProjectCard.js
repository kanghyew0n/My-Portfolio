import Image from "next/image";
import Tag from "../ui/Tag";

const ProjectCard = ({ project }) => {
    return (
        <div className="relative flex flex-col justify-between items-center gap-12 w-full p-[3vw] bg-white/5 rounded-2xl lg:flex-row ">
            <div className="w-full h-[200px] bg-black rounded-lg overflow-hidden transition-all duration-300 hover:children-transform hover:children-translate-y-[-405px] lg:w-[calc((100%-16px)/2)] lg:h-[400px] md:h-[300px]">
                <Image
                    src={project.hoverProjectImage}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover z-[-10] transition-all duration-300"
                    alt="서울인펫키지 이미지"
                />
            </div>
            <div className="w-full lg:w-[calc((100%-16px)/2)] mt-12">
                <div className="flex justify-between items-start mb-3">
                    <div className="mb-3">
                        <div className="font-bold text-2xl mb-2">
                            {project.projectName}
                        </div>
                        <div className="flex items-center">
                            <div className="font-normal text-lg">
                                {project.description}
                            </div>
                            <Tag text={project.team} />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-1 bg-black/50 rounded-full">
                        {project.serviceURL && (
                            <Image
                                src="/assets/site.svg"
                                width={32}
                                height={32}
                                className="cursor-pointer"
                                alt="사이트 이미지"
                                onClick={() => window.open(`${project.serviceURL}`)}
                            />
                        )}
                        <Image
                            src="/assets/github.svg"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                            alt="깃허브 이미지"
                            onClick={() => window.open(`${project.githubLink}`)}
                        />
                    </div>
                </div>
                <div className="text-gray-500 text-sm mb-5">{project.date}</div>
                <p className="font-light text-lg leading-[160%] border-b border-gray-500 pb-6 mb-6">
                    {project.detailDescription}
                </p>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-8 mb-4 sm:block">
                        <span className="font-semibold">📚 Front Stack</span>
                        <span className="flex flex-wrap gap-1">
                            {project.feStack.map((stack, idx) => (
                                <span className="font-light" key={idx}>
                                    {stack}
                                </span>
                            ))}
                        </span>
                    </div>
                    {project.beStack && (
                        <div className="flex items-center justify-between gap-8 mb-4 sm:block">
                            <span className="font-semibold">📚 Back Stack</span>
                            <span className="flex flex-wrap gap-1">
                                {project.beStack.map((stack, idx) => (
                                    <span className="font-light" key={idx}>
                                        {stack}
                                    </span>
                                ))}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
