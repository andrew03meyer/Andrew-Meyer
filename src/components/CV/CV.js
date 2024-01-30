import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import CV from "../../assets/CV.pdf";

function CvView() {
  return (
    <div id={"content-t"}>
      <p>view my cv:</p>
      <Worker
        workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js`}
      >
        <Viewer fileUrl={CV} />
      </Worker>
    </div>
  );
}

export default CvView;
