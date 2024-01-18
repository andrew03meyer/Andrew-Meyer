import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import AMlogo from "../../assets/images/logo.svg";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={AMlogo} alt="AM logo"></img>
        </li>
        <li>
          <Link to="/Andrew-Meyer/">Home</Link>
        </li>
        <li>
          <Link to="/Andrew-Meyer/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
