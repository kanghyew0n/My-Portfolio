import { INFO } from "@/utils/constant";

const Keyword = () => {
  return (
    <>
      <div className="fe keyword" style={getPositionStyles("fe")}>
        💻 <span>Tech Stack</span>
      </div>
      {Object.keys(INFO).map((key) => {
        const { icon, keyWord } = INFO[key];
        return (
          <div
            className={`${key} keyword`}
            key={key}
            style={getPositionStyles(key)}
          >
            <span>{icon}</span>
            <span>{keyWord}</span>
          </div>
        );
      })}
    </>
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

export default Keyword;
