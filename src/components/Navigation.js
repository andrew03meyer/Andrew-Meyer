import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/Andrew-Meyer/">Home</Link></li>
        <li><Link to="/Andrew-Meyer/about">About Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
