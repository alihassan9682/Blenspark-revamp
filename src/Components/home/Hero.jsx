import React from "react";
import { useNavigate } from "react-router-dom";

import Services from "./Services";
import Packages from "./packages";
import Projects from "./porjectsDelivered";
import Clients from "./clients";
import AboutUs from "./aboutUs";
import MeetTheSparkers from "./sparkers";
import videoSrc from "../../assets/ARVideos/8.mp4"; 
import imgSrc from "../../assets/logos/logo-nu-40177.png"; 
import imgSrc1 from "../../assets/logos/netflix-logo-png-2562.png"; 
import imgSrc2 from "../../assets/logos/picture-logo-42711.png"; 
import imgSrc3 from "../../assets/logos/picture-logo-42716.png"; 
import imgSrc4 from "../../assets/logos/spotify-logo-png-7053.png"; 
import imgSrc5 from "../../assets/logos/yankees-logo-42660.png"; 

const Hero = () => {
  const navigate = useNavigate();

  const setCurrentHero = (hero) => {
    navigate(`/${hero.toLowerCase()}`);
  };

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 z-0 w-full h-full object-cover bg-white opacity-90"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 sm:p-16 md:p-24 lg:p-32 text-center">
          <div className="logo flex flex-col items-center text-center tracking-tighter mb-8">
            <div className="flex flex-row justify-center items-baseline mb-4 text-7xl sm:text-8xl md:text-9xl lg:text-11xl tracking-[-0.12em] font-extrabold">
              <p className="text-3d !text-[#359dad]">
                Blen
              </p>
              <p className="text-3d !text-[#4a4a4a]">
                Spark
              </p>
            </div>
            <div className="flex justify-center mt-2">
              <p className="text-3d overflow-hidden whitespace-nowrap font-extralight border-r-4 border-r-[#4a4a4a] pr-5 text-sm sm:text-xl md:text-xl lg:text-xl text-[#4a4a4a] animate-typing tracking-[0.2em]">
                DESIGN. DEVELOP. DELIVER..
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <button
              onClick={() => setCurrentHero("schedule-a-call")}
              className="bg-[#4a4a4a] text-white py-3 px-6 rounded-full transition duration-300 hover:opacity-80"
            >
              Schedule a Call
            </button>
            <button
              onClick={() => setCurrentHero("see-our-work")}
              className="bg-[#359dad] text-white py-3 px-6 rounded-full transition duration-300 hover:opacity-80"
            >
              See Our Work
            </button>
          </div>
          <div className="w-full h-px bg-gray-300 mt-6"></div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-40">
            <div className="w-full relative">
              <div className="absolute inset-0 bg-white opacity-50 py-12"></div>
              <div className="flex animate-slide gap-36 relative z-10 mt-6">
                <img src={imgSrc} alt="Logo 1" className="h-12 mx-4" /> 
                <img src={imgSrc1} alt="Logo 3" className="h-12 mx-4" />
                <img src={imgSrc2} alt="Logo 4" className="h-12 mx-4" />
                <img src={imgSrc3} alt="Logo 5" className="h-12 mx-4" />
                <img src={imgSrc4} alt="Logo 6" className="h-12 mx-4" />
                <img src={imgSrc5} alt="Logo 7" className="h-12 mx-4" />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .logo {
            font-weight: 900;
            letter-spacing: -0.1em;
          }
          .text-3d {
            position: relative;
            display: inline-block;
            color: #ffffff;
            text-shadow: 1px 1px 2px #000000, 1px 1px 2px #000000, 1px 1px 3px #000000;
            transform: perspective(500px) rotateX(0deg) rotateY(-15deg) rotateZ(0deg);
          }
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          @keyframes blink {
            0%,
            100% {
              border-color: transparent;
            }
            50% {
              border-color: black;
            }
          }
          .animate-typing {
            animation: typing 8s steps(40, end) infinite, break 20s linear;
          }
          @keyframes break {
            from,
            to {
              visibility: hidden;
            }
            50% {
              visibility: visible;
            }
          }
          .animate-slide {
            animation: slide 20s linear infinite;
          }
          @keyframes slide {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>
      <Services />
      <Packages/>
      <Clients/>
      <Projects />
      <AboutUs />
      <MeetTheSparkers/>
    </div>
  );
};

export default Hero;
