import { TECH_STACK } from "@/utils/constant";

const TechStack = () => {
  return (
    <section className='mb-40 max-sm:mb-20'>
      <h1 className="w-full">
        Tech Stack
      </h1>
      <div className="flex flex-wrap gap-5 items-center max-sm:gap-3">
        {TECH_STACK.core.map((tech, idx) => (
          <div className='px-6 py-3 rounded-full border border-gray-200/50 text-[18px] max-md:px-3 max-md:py-2 max-md:text-[14px]' key={`core-${idx}`}>#{tech}</div>
        ))}

        {TECH_STACK.libraries.map((tech, idx) => (
          <div className='px-6 py-3 rounded-full border border-gray-200/50 text-[18px] max-md:px-3 max-md:py-2 max-md:text-[14px]' key={`libraries-${idx}`}># {tech}</div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
