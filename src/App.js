import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Ringing from "./components/Ringing/Ringing";
import Navbar from "./components/Navigation/Navigation";
import Background from "./components/Background/Background";
import Gallery from "./components/Gallery/Gallery";
import CV from "./components/CV/CV";

//
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//
function App() {
  return (
    <div className="App">
      <Router>
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ringing" element={<Ringing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
