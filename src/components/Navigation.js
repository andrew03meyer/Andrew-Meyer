import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import AMlogo from "../assets/images/logopng.png";
import GitHubLogo from "../assets/images/github_logo.svg";
import LinkedinLogo from "../assets/images/linkedin_logo.webp";
import FacebookLogo from "../assets/images/Facebook_logo.svg";
import InstagramLogo from "../assets/images/instagram_logo.webp";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <img className="logo" src={AMlogo} alt="AM logo"></img>
        </li>
        <li>
          <Link to="/Andrew-Meyer/" className={"name"}>
            Andrew Meyer
          </Link>
        </li>

        <li>
          <Link to="/Andrew-Meyer/">Home</Link>
        </li>
        <li>
          <Link to="/Andrew-Meyer/ringing">Ringing</Link>
        </li>
        <li>
          <Link to="/Andrew-Meyer/gallery">Gallery</Link>
        </li>

        <li className={"socials"} style={{ marginLeft: "auto" }}>
          <a href="https://github.com/andrew03meyer" target={"_blank"}>
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
