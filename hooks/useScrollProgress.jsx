import { useState, useEffect } from "react";

function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call it once in case user is already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollProgress;
}

export default useScrollProgress;
