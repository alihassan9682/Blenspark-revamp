import React from "react";
import Lottie from "react-lottie";
import animation from "../../assets/Hero/Animation.json";
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
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 sm:p-16 md:p-24 lg:p-32 text-center">
        {/* Logo */}
        <div className="logo text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 animate-float tracking-tighter">
          <div className="text-cyan-600">BlenSpark</div>
          <div className="text-gray-700">Tech</div>
        </div>

        {/* Typing Animation */}
        <div className="flex justify-center mt-2">
          <p className="logo overflow-hidden whitespace-nowrap border-r-4 border-r-gray-700 pr-5 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 animate-typing">
            DESIGN.DEVELOP.DELIVER...
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex sm:flex-row justify-center gap-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <button
            onClick={() => setCurrentHero("home")}
            className="relative flex justify-center items-center transform hover:scale-110 hover:bg-cyan-700 bg-cyan-600 text-white py-2 px-4 w-32 sm:px-8 lg:px-10 rounded-lg transition duration-300 font-semibold text-base sm:text-xl lg:text-2xl"
          >
            <span>Home</span>
          </button>
          <div className="border-b sm:border-b-0 sm:border-l border-gray-400 mt-4 sm:mt-0"></div>
          <button
            onClick={() => setCurrentHero("3d-art")}
            className="relative flex justify-center hover:scale-110 items-center whitespace-nowrap hover:bg-gray-800 bg-gray-700 text-white py-2 px-4 w-32 sm:px-8 lg:px-10 rounded-lg transition duration-300 font-semibold text-base sm:text-xl lg:text-2xl"
          >
            <span>3D</span>
          </button>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 text-center text-gray-700">
          <div>
            <h3 className="text-lg font-bold text-cyan-600">Full-Stack Web Development</h3>
            <p>We build responsive, modern websites using React, JavaScript, and Django.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-cyan-600">E-commerce Solutions</h3>
            <p>Create headless e-commerce stores with Shopify and React.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-cyan-600">Automation & Data Scraping</h3>
            <p>Automate tasks with custom Python scripts for data scraping and processing.</p>
          </div>
        </div>

        {/* Notify Me Form */}
        <div className="bg-gray-100 p-3 rounded-lg shadow-lg text-gray-900 mt-3 max-w-md w-full mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center text-cyan-600">Get Notified</h3>
          <p className="text-center mb-4">Enter your email to stay updated on our tech services launch.</p>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="border p-2 w-full rounded mb-4"
            />
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-8 rounded-lg transition duration-300 font-semibold"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>

      {/* Custom Styles */}
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
