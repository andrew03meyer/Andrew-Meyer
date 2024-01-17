import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        {/*<Header />*/}
      <Router>
          <Navigation />

          <Routes>
              <Route path="/" element ={<Header />} />
              <Route path="/about" element={<AboutMe />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
