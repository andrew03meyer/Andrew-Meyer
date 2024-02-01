import React from "react";
import CV from "../../assets/CV.pdf"
import "./CV.css"
import Navbar from "../Navigation/Navigation"
import Background from "../Background/Background";

const PDFViewer = () => {
    return (
        <>
            <Background />
            <Navbar />
            <iframe className={"iframe-cv"} src={CV} />
        </>
    );
};
export default PDFViewer;