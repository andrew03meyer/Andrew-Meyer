import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import React from "react";
// import Link from 'react-router';

import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/*<AboutMe />*/}
        <Link to="/AboutMe">Click me</Link>
    </div>
  );
}

export default App;
