import React from "react";
import "./Homepage.css";
import homeImage from "../../assets/images/homePhoto.jpg";

function Header() {
  return (
    <>
      <div className={"profile"}>
        <span className={"contents"}>
          <img id="home_photo" src={homeImage} alt={"Photo of me"}></img>
          <div>
            <p>Hello. I'm glad you've found my page!</p>
            <p>
              This website is for me to upload a bit about myself (and spend
              some time developing my programming skills). Do have a look
              around. There are some sections about me and a gallery of a number
              of good times!
            </p>
          </div>
        </span>
      </div>
    </>
  );
}

export default Header;
