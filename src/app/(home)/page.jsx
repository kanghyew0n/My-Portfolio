import About from "@/app/(home)/_component/About";
import MainText from "@/app/(home)/_component/MainText";
import TechStack from "@/app/(home)/_component/TechStack";

export default function Home() {
  return (
    <main>
      <MainText />
      <div className="pt-[20vw]">
        <TechStack />
        <About />
      </div>
    </main>
  );
}
