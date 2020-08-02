import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Launch from "./Launch";
import LaunchIndex from "./LaunchIndex";
import LaunchShoe from "./LaunchShoe";
import NotFound from "./NotFound";

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
};

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/launch"> Launch</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex shoes={shoes} />} />
          <Route path=":slug" element={<LaunchShoe shoes={shoes} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
