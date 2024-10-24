"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ModalLayer = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 모달 열였을때 body scroll 막기
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
