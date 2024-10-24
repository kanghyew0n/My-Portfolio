import { useRouter } from "next/navigation";
import MoveArrowIcon from "/public/assets/common/move_arrow.svg";

const MoveButton = ({ path }) => {
  const router = useRouter();

  return (
    <button
      className="flex size-[50px] items-center justify-center rounded-full bg-gray-200/10 transition-all duration-200 ease-in-out hover:-rotate-45"
      onClick={() => router.push(path, { scroll: false })}
    >
      <MoveArrowIcon />
    </button>
  );
};

export default MoveButton;
