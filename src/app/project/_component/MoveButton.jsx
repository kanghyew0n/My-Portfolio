import { useRouter } from "next/navigation";

const MoveButton = ({ path }) => {
  const router = useRouter();
  
  return (
    <button
      className="flex size-[50px] items-center justify-center rounded-full bg-gray-200/10 transition-all duration-200 ease-in-out hover:-rotate-45"
      onClick={() => router.push(path, { scroll: false })}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.3 14.875C7.11667 14.6917 7.02067 14.4583 7.012 14.175C7.004 13.8917 7.09167 13.6583 7.275 13.475L12.175 8.575H1C0.716667 8.575 0.479 8.479 0.287 8.287C0.0956668 8.09567 0 7.85833 0 7.575C0 7.29167 0.0956668 7.054 0.287 6.862C0.479 6.67067 0.716667 6.575 1 6.575H12.175L7.275 1.675C7.09167 1.49167 7.004 1.25833 7.012 0.975C7.02067 0.691667 7.11667 0.458333 7.3 0.275C7.48333 0.0916663 7.71667 0 8 0C8.28333 0 8.51667 0.0916663 8.7 0.275L15.3 6.875C15.4 6.95833 15.471 7.06233 15.513 7.187C15.5543 7.31233 15.575 7.44167 15.575 7.575C15.575 7.70833 15.5543 7.83333 15.513 7.95C15.471 8.06667 15.4 8.175 15.3 8.275L8.7 14.875C8.51667 15.0583 8.28333 15.15 8 15.15C7.71667 15.15 7.48333 15.0583 7.3 14.875Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default MoveButton;
