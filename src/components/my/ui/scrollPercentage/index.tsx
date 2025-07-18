import { useEffect, useState } from "react";

function ScrollPercentage() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const totalScrollable = docHeight - windowHeight;
      const scrolled = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;

      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-[6px] bg-main z-50 opacity-[${scrollPercent}%] saturate-50`}
      style={{ width: `${scrollPercent}%`,filter: `brightness(${scrollPercent}%)` }}
    >
      
    </div>
  );
}

export default ScrollPercentage;
