import { INFO } from "@/utils/constant";

const MainText = () => {
    return (
        <div className="pt-[135px] mx-auto w-full md:pt-[125px] sm:pt-[130px]">
            <div className="relative">
                <div className="text-center font-bold select-none text-[12vw] cursor-default">
                    Kanghyew0n
                </div>
                <div className="fe flex items-center gap-[8px] absolute text-[clamp(0.7rem,2.5vw,1.1rem)] px-[2vw] py-[1vw] bg-gray-200 bg-opacity-10 border-2 border-dashed border-gray-500 rounded-full transition-all duration-300 cursor-pointer animate-point" style={getPositionStyles('fe')}>
                    💻 <span>Frontend Developer</span>
                </div>
                {Object.keys(INFO).map((key) => {
                    const { icon, keyWord } = INFO[key];
                    return (
                        <div
                            className={`${key} flex items-center gap-[8px] absolute text-[clamp(0.7rem,2.5vw,1.1rem)] px-[2vw] py-[1vw] bg-gray-200 bg-opacity-10 border-2 border-dashed border-gray-500 rounded-full transition-all duration-300 cursor-pointer animate-point`}
                            key={key}
                            style={getPositionStyles(key)}
                        >
                            <span>{icon}</span>
                            <span>{keyWord}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// 각 키에 따른 위치 스타일 설정
const getPositionStyles = (key) => {
    switch (key) {
        case "fe":
            return { top: "-80px", left: "19vw" };
        case "problemSolver":
            return { top: "20vw", left: "13vw" };
        case "processImprover":
            return { top: "19vw", right: "21vw" };
        case "effectiveCommunicator":
            return { top: "-60px", right: "15vw" };
        default:
            return {};
    }
};

export default MainText;
