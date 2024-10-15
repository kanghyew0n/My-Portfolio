import React from "react";
import Link from "next/link";
import { EDUCATION } from "@/utils/experienceData";

const EducationSection = () => (
  <div className="flex pt-[60px] lg:pt-[100px]">
    <h1 className="block w-[300px] font-bold text-[28px] lg:text-[36px]">
      Education
    </h1>
    <div className="flex-1">
      {EDUCATION.map((education) => (
        <EducationItem
          key={`education-${education.id}`}
          education={education}
        />
      ))}
    </div>
  </div>
);

const EducationItem = ({ education }) => (
  <div className="mb-20">
    <h2 className="font-bold text-[24px] text-nowrap mb-[10px]">
      {education.name}
    </h2>
    <div className="mb-5">
      {education.info.map((info, idx) => (
        <React.Fragment key={`info-${education.id}-${idx}`}>
          {info.link ? (
            <Link href={info.link}>{info.title}</Link>
          ) : (
            <span className="mr-2 font-light">{info.title}</span>
          )}

          {education.info.length - 1 !== idx && (
            <span className="mr-2 font-light">|</span>
          )}
        </React.Fragment>
      ))}
      <p className="font-light">
        {education.description && education.description}
      </p>
    </div>
    {education.contents}
  </div>
);

export default EducationSection;
