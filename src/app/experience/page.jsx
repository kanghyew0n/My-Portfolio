import React from "react";
import CareerSection from "./_component/CareerSection";
import EducationSection from "./_component/EducationScetion";

export default function Experience() {
  return (
    <section className="flex flex-col gap-y-[54px]">
      <CareerSection />
      <EducationSection />
    </section>
  );
}
