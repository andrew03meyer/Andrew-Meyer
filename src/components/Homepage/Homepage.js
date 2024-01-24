import React from "react";
import "./Homepage.css";
import homeImage from "../../assets/images/homePhoto.jpg";

function Homepage() {
  return (
    <>
      <div className={"profile"}>
        <div id={"container"}>
          <img id="home_photo" src={homeImage} alt={"Photo of me"}></img>
        </div>
        <div>
          <div className={"main-content"}>
            <h1>Hello. I'm glad you've found my page!</h1>
            <p>
              This website is for me to upload a bit about myself (and spend
              some time developing my programming skills). Do have a look
              around. There are some sections about me and a gallery of a number
              of good times!
            </p>
          </div>

          <div className={"rule"}></div>

          <div className={"main-content"}>
            <h1>A bit about me</h1>
            <p>
              I'm a current student at the university of Kent in Canterbury. I'm
              in my second year doing a BSc. My modules, and marks, will be
              uploaded in a separate section on this website.
            </p>
            <p>
              I'm a long standing Bell ringer (16 years+) and have taken to
              teaching and bell maintenance as of late. I do most of my ringing
              in either London or Canterbury, but do travel round a bit!
            </p>
            <p>
              I've also taken up tennis since joining university. So far I'm ok!
              I'm very much enjoying it though and hopefully will improve in the
              future!
            </p>
          </div>

          <div className={"rule"}></div>

          <div className={"main-content"}>
            <h1>Opportunities:</h1>
            <p>
              I'm currently looking for a year in industry (in the Computer
              Science area) and am open to any offers. Ideally, I would start
              sometime June-July 2023 and work till September 2024. If you have
              any opportunities that you think I may be interested in please do
              contact me!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
