import "./PhotoCollage.css";
import PfP from "../../assets/images/id_photo.jpg";
import Drilling from "../../assets/images/Drilling.jpg";
import Wedding from "../../assets/images/Wedding.jpg";
import Working from "../../assets/images/working.jpg";
import meandbec from "../../assets/images/meandbec.jpg";
import canoe from "../../assets/images/canoe.jpg";
import canalboat from "../../assets/images/canalboat.jpg";
import pub from "../../assets/images/pub.jpg";
import kinsey from "../../assets/images/kinsey.jpg";
import kinsey2 from "../../assets/images/kinsey2.jpg";
import React from "react";

function PhotoCollage() {
  return (
    <div className={"container"}>
      <img className={"image-ver"} src={PfP} alt="ID Photo"></img>
      <img className={"image-ver"} src={Drilling} alt="ID Photo"></img>
      <img className={"image-hor"} src={Wedding} alt="ID Photo"></img>
      <img className={"image-hor"} src={Working} alt="ID Photo"></img>
      <img className={"image-hor"} src={meandbec} alt="ID Photo"></img>
      <img className={"image-hor"} src={canoe} alt="ID Photo"></img>
      <img className={"image-hor"} src={canalboat} alt="ID Photo"></img>
      <img className={"image-hor"} src={pub} alt="ID Photo"></img>
      <img className={"image-hor"} src={kinsey} alt="ID Photo"></img>
      <img className={"image-hor"} src={kinsey2} alt="ID Photo"></img>
    </div>
  );
}

export default PhotoCollage;
