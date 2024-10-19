"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ModalLayer = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleCloseModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      router.back();
    }, 200);
  };

  return (
    <div
      className={`modal-layer ${isAnimating ? "show" : ""}`}
      onClick={handleCloseModal}
    >
      {children}
    </div>
  );
};

export default ModalLayer;
