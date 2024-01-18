import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*<Header />*/}
      <Router>
        <Navigation />
        <Header />

        <Routes>
          <Route path="andrew03meyer.github.io/Andrew-Meyer/" element={<Header />} />
          <Route path="andrew03meyer.github.io/Andrew-Meyer/about" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
