import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import AMlogo from "../assets/images/logopng.png";
import GitHubLogo from "../assets/images/github_logo.svg";
import LinkedinLogo from "../assets/images/linkedin_logo.webp";
import FacebookLogo from "../assets/images/Facebook_logo.svg";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <img className="logo" src={AMlogo} alt="AM logo"></img>
        </li>
        <li className="name">
          Andrew Meyer
        </li>
        <li>
          <Link to="/Andrew-Meyer/">Home</Link>
        </li>
        <li>
          <Link to="/Andrew-Meyer/about">About Me</Link>
        </li>
          <li className={"socials"} style={{marginLeft: "auto"}}><a href="https://github.com/andrew03meyer">
            <img className="logo" src={GitHubLogo} alt="github"></img>
          </a></li>
          <li className={"socials"}><a href="https://www.linkedin.com/in/andrew-meyer-200103266/">
            <img className="logo" src={LinkedinLogo} alt="linkedin"></img>
          </a></li>
          <li className={"socials"}><a href="https://www.facebook.com/andrew03meyer/">
            <img className="logo" src={FacebookLogo} alt="Facebook"></img>
          </a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
