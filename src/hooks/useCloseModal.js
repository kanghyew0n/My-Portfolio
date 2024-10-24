"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const UseCloseModalWithDelay = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleCloseModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      router.back();
    }, 200);
  };

  return { isAnimating, handleCloseModal }
}

export default UseCloseModalWithDelay