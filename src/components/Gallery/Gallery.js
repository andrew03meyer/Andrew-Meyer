import "./Gallery.css";
import PfP from "../../assets/images/id_photo.webp";
import Drilling from "../../assets/images/Drilling.webp";
import Wedding from "../../assets/images/Wedding.jpg";
import Working from "../../assets/images/working.jpg";
import MeAndBec from "../../assets/images/meandbec.webp";
import Canoe from "../../assets/images/canoe.webp";
import CanalBoat from "../../assets/images/canalboat.webp";
import Pub from "../../assets/images/pub.webp";
import Kinsey from "../../assets/images/kinsey.webp";
import Kinsey2 from "../../assets/images/kinsey2.webp";
import React from "react";

function PhotoCollage() {
  return (
    <>
      <h1>My Gallery:</h1>
      <div className={"container"}>
        <div className={"container-img"}>
          <img className={"image-ver"} src={PfP} alt="ID Photo"></img>
          <div className={"text-overlay"}>Photo for Kent University</div>
        </div>

        <div className={"container-img"}>
          <img className={"image-ver"} src={Drilling} alt="ID Photo"></img>
          <div className={"text-overlay"}>
            Drilling out a candle for my sister's wedding
          </div>
        </div>

        <div className={"container-img"}>
          <img className={"image-hor"} src={Wedding} alt="Wedding"></img>
          <div className={"text-overlay"}>Me and my sister at her wedding</div>
        </div>

        <div className={"container-img"}>
          <img className={"image-hor"} src={Working} alt="Work"></img>
          <div className={"text-overlay"}>
            Me working on an assignment at university
          </div>
        </div>

        <div className={"container-img"}>
          <img className={"image-hor"} src={MeAndBec} alt="Wedding"></img>
          <div className={"text-overlay"}>Me and my sister at her wedding</div>
        </div>

        <div className={"container-img"}>
          <img className={"image-hor"} src={Canoe} alt="ID Photo"></img>
          <div className={"text-overlay"}>
            A photo of me when i went canoeing
          </div>
        </div>

        <div className={"container-img"}>
          <img className={"image-hor"} src={CanalBoat} alt="ID Photo"></img>
          <div className={"text-overlay"}>
            A photo of me and my sister on a canal boat
          </div>
        </div>

        <div className={"container-img"}>
          <img className={"image-hor"} src={Pub} alt="ID Photo"></img>
          <div className={"text-overlay"}>
            A photo of me enjoying a beer at a pub, after some canoeing!
          </div>
        </div>

        <div className={"container-img"}>
          <img className={"image-hor"} src={Kinsey} alt="ID Photo"></img>
          <div className={"text-overlay"}>
            A photo of Kinsey Meyer-Ridley on my shoulder
          </div>
        </div>

        <div className={"container-img"}>
          <img className={"image-hor"} src={Kinsey2} alt="ID Photo"></img>
          <div className={"text-overlay"}>
            Another photo of Kinsey Meyer-Ridley
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoCollage;
