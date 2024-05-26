import { FaChevronRight } from "react-icons/fa";
import React, { Suspense, useRef, useState, useEffect } from "react";
import Lottie from "react-lottie";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import animation from "../assets/Hero/Animation.json";
import { useNavigate } from "react-router-dom";
import man from "./char.glb";

// Function to load and animate the 3D model
const Character = () => {
  const { scene, animations } = useGLTF(man); // Adjust the path to your 3D model file
  const modelRef = useRef();
  const { actions } = useAnimations(animations, modelRef);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]].play(); // Play the first animation
    }
  }, [actions]);

  return <primitive ref={modelRef} object={scene} scale={1.5} />;
};

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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Define mobile screen width

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const setCurrentHero = (hero) => {
    navigate(`/${hero.toLowerCase()}`);
  };

  return (
    <div className="relative h-screen overflow-hidden flex flex-col lg:flex-row items-center">
      <div className="absolute inset-0 z-0 opacity-30">
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center lg:w-1/2 p-8 sm:p-16 md:p-24 lg:p-32 text-center">
        <div className="logo text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 animate-float tracking-tighter">
          <div className="flex flex-col items-start">
            <p className="text-cyan-600">Blen</p>
            <p className="text-gray-700 flex-shrink-0">Spark 3D</p>
          </div>
        </div>
        <div className="w-max flex text-center mt-2">
          <p className="overflow-hidden whitespace-nowrap border-r-4 border-r-gray-700 pr-5 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 animate-typing">
            DESIGN.DEVELOP.DELIVER...
          </p>
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
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls
              enableZoom={false}
              minAzimuthAngle={-Math.PI / 2}
              maxAzimuthAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 2.5}
            />
            <ambientLight intensity={1.5} />
            <directionalLight position={[0, 10, 0]} intensity={1} />
            <Character />
          </Suspense>
        </Canvas>
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
