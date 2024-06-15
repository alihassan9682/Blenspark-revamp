/** @format */

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CardsSection from "./Components/CardsSection";
import { CourselDemo } from "./Components/CourselDemo";
import Footer from "./Components/Footer";
import ForBussiness from "./Components/ForBussiness";
import Header from "./Components/Header";
import LogowithText from "./Components/LogowithText";
import OneDriveSection from "./Components/OneDriveSection";
import Social from "./Components/Social";
import Hero from "./Components/Hero";
import HeroTech from "./Components/HeroTech";
import Hero3D from "./Components/Hero3D";
import Hero3D1 from "./Components/Hero3Dvideo";
import Contact from "./Components/contact"


function App() {
  return (
    <Router>
      <div className="font-montserrat sm:pl-0 md:pl-20">
        <div className="sticky top-0 z-50 bg-white opacity-75">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/tech" element={<HeroTech />} />
          <Route path="/3d-art" element={<Hero3D1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carousel" element={<CourselDemo />} />
          <Route path="/business" element={<ForBussiness />} />
          <Route path="/3d world" element={<Hero3D />} />
          <Route path="/about" element={<Social />} />
          {/* Handle unknown routes */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
