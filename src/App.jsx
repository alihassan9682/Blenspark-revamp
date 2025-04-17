/** @format */

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/home/Hero";
import InteractiveModelViewer from "./Components/3DConfigurator/ModelViewer"
import Contact from "./Components/contact/contact";
import { Toaster } from 'react-hot-toast';
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation()
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: 9999
          }
        }}
      />
      <div className="font-montserrat sm:pl-16  relative">
        <div className="sticky top-0 z-50 bg-white bg-opacity-75">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/3d-configurator" element={<InteractiveModelViewer />} />
          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        </Routes>
        {location.pathname !== "/3d-configurator" && (<Footer />)}

      </div>
    </>
  );
}

export default App;
