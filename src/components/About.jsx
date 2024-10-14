import AboutItem from "@/components/AboutItem";
import { INFO } from "@/utils/constant";

const About = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-[48px]">
        <h2 className="font-bold text-[28px] w-full lg:text-[32px]">
          About me :)
        </h2>
      </div>
      <div className="flex flex-col gap-[48px] lg:flex-row">
        {Object.keys(INFO).map((key) => (
          <AboutItem info={INFO[key]} key={key} />
        ))}
      </div>
    </section>
  );
};

export default About;
