import React from "react";
import "./App.css";
import Ringing from "./components/Ringing/Ringing";
import Homepage from "./components/Homepage/Homepage";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery/Gallery";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/ringing" element={<Ringing />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
