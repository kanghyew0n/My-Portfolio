import AboutItem from "@/app/(home)/_component/AboutItem";
import { INFO } from "@/utils/constant";

const About = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1>About me</h1>
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
