import AboutItem from "@/app/(home)/_component/AboutItem";
import { ABOUT } from "@/utils/constant";

const About = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1>About me</h1>
      </div>
      <div className="flex flex-row gap-[48px] max-lg:flex-col max-sm:gap-[24px]">
        {Object.keys(ABOUT).map((key) => (
          <AboutItem info={ABOUT[key]} key={key} />
        ))}
      </div>
    </section>
  );
};

export default About;
