import AboutItem from "@/components/AboutItem";
import { INFO } from "@/utils/constant";

const About = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1>About me :)</h1>
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
