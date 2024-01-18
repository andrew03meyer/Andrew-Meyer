import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery/Gallery";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/Andrew-Meyer/" element={<Header />} />
          <Route path="/Andrew-Meyer/about" element={<AboutMe />} />
          <Route path="/Andrew-Meyer/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
