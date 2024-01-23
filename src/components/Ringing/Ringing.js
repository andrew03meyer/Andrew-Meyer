import React, { useEffect } from "react";
import "./Ringing.css";
import syr from "../../assets/images/syr.jpg";
import shipleyBells from "../../assets/images/shipley-bells.jpg";
function Ringing() {
  return (
    <>
      <div className={"main-content-ringing"}>
        <h1>Introduction</h1>
        <p>
          Many don't know the basics of ringing, and I think there is a good
          reason for that. It's not got any similarities to anything else. I
          find it a very hard task to define how to ring "simply". But, I do
          think it is very rewarding and suggest, given the chance, anyone
          should at least try it once!
        </p>
      </div>

      <div className={"rule"}></div>

      <div className={"picture-and-text"}>
        <img
          className={"picture"}
          src={syr}
          alt={"Sussex Young Ringers"}
        ></img>

        <div className={"rule"}></div>

        <div className={"main-content-ringing"}>
          <h1>My Ringing Career</h1>
          <p>
            I started off ringing at a very young age (4yrs) and have
            consistently carried it on through my life. It is a hobby that I
            enjoy greatly and have been developing myself through it for a long
            time.
          </p>
          <p>
            I've more recently taken to teaching. It is something i really enjoy
            to do, and i don't think that will ever change. I also feel that the
            teaching scene could do with some work and therefore needs people
            like myself, who have an interest, to go and do it!
          </p>
          <p>
            I have also judge a number of striking competitions, which I enjoy
            doing. Including: multiple local competitions, the Tewkesbury
            Shield, and the London 12 bell. And I'm hoping to judge the RWNYC
            and 12 bell at some point in the future!
          </p>
          <p>
            As seen in the picture on the right, I have been part of the Sussex
            young ringers band (for multiple years). My last being Worcester in
            2021. I was conductor for the band in 2021, and we managed to place
            2nd overall.
          </p>
        </div>
      </div>

      <div className={"rule"}></div>

      <div className={"picture-and-text"}>
        <div className={"main-content-ringing"}>
          <h1>Steeplekeeping</h1>
          <p>
            I have also taken a strong interest in steeplekeeping, mainly at my
            local towers and St Mary le Bow (London). Soon to be proposed for
            steeple keeper at Bow.
          </p>
          <p>
            Recently, I have been lucky enough to get my hands on a Bagley Meter
            (to measure clapper and swing times of bells) and have been applying
            it to as many towers as possible. I've spent years tinkering with
            bells and have been developing my skills the whole time.
          </p>

          <h1>Teaching</h1>
          <p>
            I started teaching people to ring more recently. I have completed
            ART's (Association of Ringing Teachers) module 1, twice. Since then,
            I have taken up teaching at my local tower (St Stephen's). And am
            currently teaching a number of new learners, as well as mentoring
            more experienced ringers.
          </p>
        </div>
        <img
            className={"picture"}
            src={shipleyBells}
            alt={"Shipley Picture"}
        />
      </div>
    </>
  );
}

export default Ringing;
