import React, { useState } from "react";
import "./Lightmode.css";
import Background from "../Background/Background";

function Lightmode() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const modeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div
        id={"mode-selector"}
        className={isDarkMode ? "dark-mode" : "light-mode"}
        onClick={modeChange}
      >
        <div className={isDarkMode ? "slider-dark" : "slider-light"}></div>
      </div>
      <Background mode={isDarkMode} />
    </>
  );
}

export default Lightmode;
