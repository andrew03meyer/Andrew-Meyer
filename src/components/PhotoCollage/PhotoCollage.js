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
      <div className={"container-ver"}>
        <img className={"image-ver"} src={PfP} alt="ID Photo"></img>
        <div className={"text-overlay"}>Photo for Kent University</div>
      </div>

      <div className={"container-ver"}>
        <img className={"image-ver"} src={Drilling} alt="ID Photo"></img>
        <div className={"text-overlay"}>
          Drilling out a candle for my sister's wedding
        </div>
      </div>

      <div className={"container-hor"}>
        <img className={"image-hor"} src={Wedding} alt="Wedding"></img>
        <div className={"text-overlay"}>Me and my sister at her wedding</div>
      </div>

      <div className={"container-hor"}>
        <img className={"image-hor"} src={Working} alt="Work"></img>
        <div className={"text-overlay"}>
          Me working on an assignment at university
        </div>
      </div>

      <div className={"container-hor"}>
        <img className={"image-hor"} src={meandbec} alt="Wedding"></img>
        <div className={"text-overlay"}>Me and my sister at her wedding</div>
      </div>

      <div className={"container-hor"}>
        <img className={"image-hor"} src={canoe} alt="ID Photo"></img>
        <div className={"text-overlay"}>A photo of me when i went canoeing</div>
      </div>

      <div className={"container-hor"}>
        <img className={"image-hor"} src={canalboat} alt="ID Photo"></img>
        <div className={"text-overlay"}>
          A photo of me and my sister on a canal boat
        </div>
      </div>

      <div className={"container-hor"}>
        <img className={"image-hor"} src={pub} alt="ID Photo"></img>
        <div className={"text-overlay"}>
          A photo of me enjoying a beer at a pub, after some canoeing!
        </div>
      </div>

      <div className={"container-hor"}>
        <img className={"image-hor"} src={kinsey} alt="ID Photo"></img>
        <div className={"text-overlay"}>
          A photo of Kinsey Meyer-Ridley on my shoulder
        </div>
      </div>

      <div className={"container-hor"}>
        <img className={"image-hor"} src={kinsey2} alt="ID Photo"></img>
        <div className={"text-overlay"}>
          Another photo of Kinsey Meyer-Ridley
        </div>
      </div>
    </div>
  );
}

export default PhotoCollage;
