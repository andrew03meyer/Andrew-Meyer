import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="andrew03meyer.github.io/Andrew-Meyer/">Home</Link>
        </li>
        <li>
          <Link to="andrew03meyer.github.io/Andrew-Meyer/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
