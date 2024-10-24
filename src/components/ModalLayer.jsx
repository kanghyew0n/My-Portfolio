"use client";

import { useEffect } from "react";
import UseCloseModalWithDelay from "@/hooks/useCloseModal";

const ModalLayer = ({ isAnimatingProp = false, children }) => {
  const { isAnimating, handleCloseModal } = UseCloseModalWithDelay();

  useEffect(() => {
    // 모달 열였을때 body scroll 막기
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className={`modal-layer ${isAnimating || isAnimatingProp ? "show" : ""}`}
      onClick={handleCloseModal}
    >
      {children}
    </div>
  );
};

export default ModalLayer;
