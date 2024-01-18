import LinkedinLogo from "../../assets/images/linkedin_logo.webp";
import GitHubLogo from "../../assets/images/github_logo.svg";
import PfP from "../../assets/images/id_photo.jpg";
import FacebookLogo from "../../assets/images/Facebook_logo.svg";
import React from "react";

function Header() {
  return (
      <div className={"profile"}>
            <img id="id_photo" src={PfP} alt="ID Photo"></img>
            <img id="id_photo" src={PfP} alt="ID Photo"></img>
            <img id="id_photo" src={PfP} alt="ID Photo"></img>
            <img id="id_photo" src={PfP} alt="ID Photo"></img>
          {/*</div>*/}

          <span className={"contents"}>
              <h2>About me:</h2>
              <p>
                  I'm currently studying at the University of Kent, in my second year.
                  Currently, I'm mainly focused in Web Development, Computer Systems,
                  AI, Correctness and Efficiency of Algorithms. I'm a dedicated ringer,
                  of 15 years, and an avid tennis player. I've had a passion for
                  technology since I was young, and have funneled that into my studies
                  and spare time.
              </p>
          </span>
          <span className={"contents"}>
              <h2>Opportunities:</h2>
              <p>
                  I'm currently looking for a year in industry for (Jun 2024 - Jul 2025)
                  but also open for anything that will develop my skills. I enjoy data
                  analysis as well as web development, but I am open to experience any
                  type of technological opportunity.
              </p>
          </span>
      </div>
  );
}

export default Header;
