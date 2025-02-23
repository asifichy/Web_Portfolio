import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Math.round((currentProgress / scrollHeight) * 100)); // ✅ Fixed calculation
      }
    };

    window.addEventListener("scroll", updateScrollCompletion); // ✅ Fixed `window`
    
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return completion;
};

export default useScrollProgress;
