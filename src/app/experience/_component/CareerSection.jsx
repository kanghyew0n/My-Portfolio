import React from "react";
import Link from "next/link";
import { CAREER } from "@/utils/experienceData";

const CareerSection = () => (
  <div className="flex pt-[60px] lg:pt-[100px]">
    <h1 className="block w-[300px]">Career</h1>
    <div className="flex-1">
      {CAREER.map((career) => (
        <CareerItem key={`careers-${career.id}`} career={career} />
      ))}
    </div>
  </div>
);

const CareerItem = ({ career }) => (
  <div className="mb-20">
    <h2 className="mb-[10px] text-nowrap">{career.company}</h2>
    <div className="mb-5">
      {career.info.map((info, idx) => (
        <React.Fragment key={`info-${career.id}-${idx}`}>
          {info.link ? (
            <Link href={info.link}>{info.title}</Link>
          ) : (
            <span className="mr-2">{info.title}</span>
          )}
          {career.info.length - 1 !== idx && <span className="mr-2">|</span>}
        </React.Fragment>
      ))}
    </div>
    {career.contents}
  </div>
);

export default CareerSection;
