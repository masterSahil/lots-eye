import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrolled / totalHeight) * 100;

    setScrollProgress(progress);
    setVisible(scrolled > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>

      {/* Back to Top Button */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition-transform scale-110 hover:scale-115"
          aria-label="Scroll to top"
        >
          <ChevronUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
