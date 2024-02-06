import React from "react";
import CV from "../../assets/CV.pdf";
import "./CV.css";

const PDFViewer = () => {
  return (
    <>
      <iframe className={"iframe-cv"} src={CV} />
    </>
  );
};
export default PDFViewer;
