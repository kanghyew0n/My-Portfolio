import { ABOUT } from "@/utils/homeData";

const ITEM = {
  fe: {
    icon: "💻",
    keyWord: "Tech Stack",
  },
  ...ABOUT,
};

const Keyword = () => {
  return (
    <div className="h-[60px] flex justify-evenly">
      {Object.keys(ITEM).map((key) => (
        <KeywordItem key={key} itemKey={key} />
      ))}
    </div>
  );
};

const KeywordItem = ({ itemKey }) => {
  const { icon, keyWord } = ITEM[itemKey];
  return (
    <div className={`${itemKey} keyword`} key={itemKey}>
      <div className="flex items-center gap-[8px]">
        <span>{icon}</span>
        <span className="max-md:hidden">{keyWord}</span>
      </div>
    </div>
  );
};

export default Keyword;
