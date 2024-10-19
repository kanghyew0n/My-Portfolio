import { TECH_STACK } from "@/utils/constant";

const TechStack = () => {
  return (
    <section className='mb-40'>
      <h1 className="w-full">
        💻 Tech Stack
      </h1>
      <div className="flex flex-wrap gap-5 items-center mb-[48px]">
        {TECH_STACK.core.map((tech, idx) => (
          <div className='px-6 py-3 rounded-full border border-gray-200 font-medium' key={`core-${idx}`}>#{tech}</div>
        ))}

        {TECH_STACK.libraries.map((tech, idx) => (
          <div className='px-6 py-3 rounded-full border border-gray-200 font-medium' key={`libraries-${idx}`}># {tech}</div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
