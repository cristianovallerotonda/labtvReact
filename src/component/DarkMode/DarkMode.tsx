import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import "./darkmode.scss";

const animation = gsap.timeline({
  duration: 0.01,
  paused: true,
  reversed: true,
  ease: "expo.inOut",
});

const DarkMode = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const circleClickHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    animation.reversed() ? animation.play() : animation.reverse();
  };

  useEffect(() => {
    const circle = wrapperRef.current!.querySelector(".circle");
    animation.to(circle, { x: "2rem" });
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="toggle" onClick={circleClickHandler}>
        <div>
          <FontAwesomeIcon icon={faSun} className="sun" />
        </div>
        <div>
          <FontAwesomeIcon icon={faMoon} className="moon" />
        </div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default DarkMode;
