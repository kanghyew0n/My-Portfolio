import { forwardRef } from "react";
import InfoCard from "../mainPage/InfoCard";
import { INFO } from "../../constant";

const Pointer = forwardRef((_, ref) => {
    return (
        <div className="flex justify-between items-center mb-[48px]">
            <h2 ref={ref} className='font-bold text-[28px] pl-[2vw] w-full lg:text-[32px]'>저는 이런 개발자입니다 :)</h2>
        </div>
    );
});

const ItsMe = ({ itsMeRef }) => {
    return (
        <section className='pt-[25vw]'>
            <Pointer ref={itsMeRef} />
            <div className='flex flex-col gap-[32px] lg:flex-row'>
                {Object.keys(INFO).map((key) => (
                    <InfoCard info={INFO[key]} key={key} />
                ))}
            </div>
        </section>
    );
};

export default ItsMe;
