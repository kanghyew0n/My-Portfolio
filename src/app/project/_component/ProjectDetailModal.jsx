"use client";

import { PROJECT } from "@/utils/projectData";
import ModalLayer from "@/components/ModalLayer";
import CloseIcon from "/public/assets/common/close.svg";
import UseCloseModalWithDelay from "@/hooks/useCloseModal";

const ProjectDetailModal = ({ params }) => {
  const { isAnimating, handleCloseModal } = UseCloseModalWithDelay();

  const { id } = params;
  const project = PROJECT.find((project) => project.id === id);

  return (
    <ModalLayer isAnimatingProp={isAnimating}>
      <dialog
        open
        id="dialog-1"
        className="modal-bg-box left-[50%] translate-x-[-50%] translate-y-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute right-[35px] top-[35px] cursor-pointer" onClick={handleCloseModal}>
          <CloseIcon />
        </div>
        <h1>{project.name}</h1>
        <h3>What did I do</h3>
        <ul className="">
          {project.result.map((result, idx) => (
            <li
              key={`${project.id}-${idx}`}
              className="mb-2 ml-5 list-disc text-lg font-light max-sm:text-[16px]"
            >
              {result}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 mt-5">Tech Stack</h3>
        <ul className="mb-10 flex flex-wrap gap-2">
          {project.techStacks.map((techStack, idx) => (
            <li key={`techStack-${project.id}-${idx}`}>
              <span className="block rounded-full border border-gray-200/50 bg-black px-3 py-1 max-sm:text-[16px]">
                {techStack}
              </span>
            </li>
          ))}
        </ul>
      </dialog>
    </ModalLayer>
  );
};

export default ProjectDetailModal;
