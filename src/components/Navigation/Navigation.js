import React from "react";
import { Link } from "react-router-dom";
import AMlogo from "../../assets/images/logopng.png";
import GitHubLogo from "../../assets/images/github_logo.svg";
import LinkedinLogo from "../../assets/images/linkedin_logo.webp";
import FacebookLogo from "../../assets/images/Facebook_logo.svg";
import InstagramLogo from "../../assets/images/instagram_logo.webp";
import Lightmode from "../LightMode Button/Lightmode";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Lightmode />
        </li>
        <li>
          <img className="logo" src={AMlogo} alt="AM logo"></img>
        </li>
        <li>
          <Link to="/" className={"name"}>
            Andrew Meyer
          </Link>
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ringing">Ringing</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/programming">Programming</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>

        <li className={"socials"} style={{ marginLeft: "auto" }}>
          <a href="https://github.com/andrew03meyer" target="_blank">
            <img className="logo" src={GitHubLogo} alt="github"></img>
          </a>
        </li>

        <li className={"socials"}>
          <a
            href="https://www.linkedin.com/in/andrew-meyer-200103266/"
            target={"_blank"}
          >
            <img className="logo" src={LinkedinLogo} alt="linkedin"></img>
          </a>
        </li>

        <li className={"socials"}>
          <a href="https://www.facebook.com/andrew03meyer/" target={"_blank"}>
            <img className="logo" src={FacebookLogo} alt="Facebook"></img>
          </a>
        </li>

        <li className={"socials"}>
          <a href="https://www.instagram.com/andrew03meyer/" target={"_blank"}>
            <img className="logo" src={InstagramLogo} alt="Instagram"></img>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
