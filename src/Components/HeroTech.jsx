/** @format */

import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Lottie from "react-lottie";
import animation from "../assets/Hero/Animation.json";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const navigate = useNavigate(); 

  const setCurrentHero = (hero) => {
    navigate(`/${hero.toLowerCase()}`); 
  };
  
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 sm:p-16 md:p-24 lg:p-32 text-center">
        <div className="logo text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 flex flex-row justify-center animate-float tracking-tighter">
          <p className="text-cyan-600">Blen</p>
          <p className="text-gray-700">Spark TECH</p>
        </div>
        <div className="w-max flex text-center mt-2">
          <p className="overflow-hidden whitespace-nowrap border-r-4 border-r-gray-700 pr-5 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 animate-typing">
            DESIGN.DEVELOP.DELIVER...
          </p>
        </div>
        <div className="mt-8 text-sm sm:text-base md:text-lg lg:text-xl sm:px-16 md:px-18 lg:px-44">
          Introducing BlenSpark: your one-stop digital solution provider. From
          web and IT services to data analytics, 3D modeling, animation, and
          advertising, we've got you covered. Our team delivers tailored
          solutions that drive growth and captivate audiences across every
          dimension. Partner with BlenSpark and unlock the power of integrated
          digital innovation.
        </div>
        <div className="flex sm:flex-row justify-center gap-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <button
            onClick={() => setCurrentHero("home")} // Wrapped in an arrow function
            className="relative flex justify-center items-center transform hover:scale-110 hover:bg-cyan-700 bg-cyan-600 text-white py-2 px-4 w-32 sm:px-8 lg:px-10 rounded-lg transition duration-300 font-semibold text-base sm:text-xl lg:text-2xl"
          >
            <span>Home</span>
          </button>
          <div className="border-b sm:border-b-0 sm:border-l border-gray-400 mt-4 sm:mt-0"></div>
          <button
            onClick={() => setCurrentHero("3d-art")} // Wrapped in an arrow function
            className="relative flex justify-center hover:scale-110 items-center whitespace-nowrap hover:bg-gray-800 bg-gray-700 text-white py-2 px-4 w-32 sm:px-8 lg:px-10 rounded-lg transition duration-300 font-semibold text-base sm:text-xl lg:text-2xl"
          >
            <span>3D</span>
          </button>
        </div>
      </div>
      <style>{`
        .logo {
          font-weight: 900;
          letter-spacing: -0.1em;
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
      `}</style>
    </div>
  );
};

export default Hero;
