import React, { useState } from 'react';
import phoneImage from '../../assets/Cards/mobile.png';
import blenSpaark from '../../assets/Cards/BlenSpark.png';
import design from '../../assets/Cards/DESIGN/2.png';
import develop from '../../assets/Cards/DESIGN/3.png';
import devliver from '../../assets/Cards/DESIGN/4.png';
import Scroller from './Scroller';

const HeroSection = () => {
  const [img, setImage] = useState(blenSpaark);

  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#5AAFBB] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center justify-items-center w-full min-h-screen 2xl:h-1/2 px-4 md:px-8 lg:px-16 gap-4">
      {/* Forward Arrow Left - Hidden on mobile */}
      <div className="hidden lg:block">
        <img src="/forward.png" alt="Forward arrow" className="w-1/3 h-auto" />
      </div>

      {/* Main Grid Container for Buttons and Image */}
      <div className="col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-items-center w-full">
        {/* Design Button */}
        <button
          className="hidden md:block  items-center text-center justify-center bg-[#359dad] shadow-2xl text-white text-2xl font-bold
          w-full h-36 lg:h-36 2xl:h-64 px-4 lg:px-6 xl:px-8
          transform hover:scale-105 transition-transform cursor-pointer"
          onClick={() => setImage(design)}
        >
          DESIGN
        </button>

        {/* Develop Button */}
        <button
          className="hidden md:block items-center justify-center bg-[#4a4a4a] shadow-2xl text-white text-2xl font-bold
          w-full h-36 lg:h-36 2xl:h-64 px-4 lg:px-2 xl:px-5
          transform hover:scale-105 transition-transform cursor-pointer"
          onClick={() => setImage(develop)}
        >
          DEVELOP
        </button>

        {/* Central Image Section */}
        <div className="relative w-full h-full flex items-center justify-center col-span-1 md:col-span-1">
          <img
            src={img}
            alt="Background"
            className="w-full h-auto p-2 my-32 md:my-0 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={phoneImage}
              alt="Phone"
              className="w-full h-auto py-11 object-cover cursor-pointer"
              onClick={() => setImage(img)}
            />
            {/* Scroller Component - Only visible on mobile */}
            <div className="block md:hidden">
              <Scroller />
            </div>
          </div>
        </div>

        {/* Deliver Button */}
        <button
          className="hidden md:block items-center justify-center bg-[#34dd64] shadow-2xl text-white text-2xl font-bold
          md:w-full h-36 lg:h-36 2xl:h-64 px-4 lg:px-4 xl:px-6
          transform hover:scale-105 transition-transform cursor-pointer"
          onClick={() => setImage(devliver)}
        >
          DELIVER
        </button>
      </div>

      {/* Forward Arrow Right - Hidden on mobile */}
      <div className="hidden lg:block ml-10">
        <img src="/forward.png" alt="Forward arrow" className="w-1/3 h-auto" />
      </div>
    </div>
  );
};

export default HeroSection;