import About from "@/components/About";
import MainText from "@/app/(home)/_component/MainText";
import ProjectButton from "@/components/ui/ProjectButton";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <MainText />
      <div className="pt-[25vw]">
        <TechStack />
        <About />
        <ProjectButton />
      </div>
    </main>
  );
}
