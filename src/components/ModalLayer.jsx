"use client";

import { useRouter } from "next/navigation";

const ModalLayer = ({ children }) => {
  const router = useRouter();

  const handleClickBack = () => {
    router.back();
  };

  return (
    <div
      className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/50"
      onClick={handleClickBack}
    >
      {children}
    </div>
  );
};

export default ModalLayer;
