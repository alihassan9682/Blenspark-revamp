import React, { useState } from 'react';
import phoneImage from '../../assets/Cards/mobile.png';
import blenSpaark from '../../assets/Cards/mobile1.png';
import design from '../../assets/Cards/DESIGN/2.png';
import develop from '../../assets/Cards/DESIGN/3.png';
import devliver from '../../assets/Cards/DESIGN/4.png';
import Scroller from './Scroller';

const HeroSection = () => {
  const [img, setImage] = useState(blenSpaark);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen sm:px-16 md:flex-row relative md:px-0">
      <span className='hidden lg:block'>
        <img src="/forward.png" alt="" className="lg:w-1/3 lg:h-auto" />
      </span>
      <div className="bg-[#359dad] hidden text-white text-2xl md:w-60 md:px-4 md:h-36 md:flex xl:px-12 lg:px-6 lg:h-32 font-bold xl:w-60 xl:h-40  lg:w-60 md:items-center md:justify-center md:block shadow-xl transform hover:scale-105 hover:cursor-pointer" onClick={() => setImage(design)}>
        DESIGN
      </div>
      <div className="bg-[#4a4a4a] hidden text-white text-2xl xl:px-8 font-bold md:w-48 md:px-4 md:h-36  xl:w-64 xl:h-40 lg:h-32 md:flex md:items-center md:justify-center md:block shadow-lg transform hover:scale-105 mx-2 lg:px-2 hover:cursor-pointer" onClick={() => setImage(develop)}>
        DEVELOP
      </div>
      <div className="relative transform hover:scale-105 h-auto max-w-full md:max-w-3/4 lg:w-2/3 xl:w-1/2 2xl:max-w-1/4">
        <img
          src={img}
          alt="Phone1"
          className="w-full h-auto p-2 my-32 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center md:my-0">
          <img
            src={phoneImage}
            alt="Phone"
            className="w-full h-auto py-11 object-cover "
          />
          <Scroller className="block md:hidden lg:hidden" />
        </div>
      </div>
      <div className="bg-[#34dd64] text-white hidden text-2xl md:w-60 md:h-36 md:px-4 lg:px-4  font-bold lg:h-32 xl:w-60 xl:px-10 xl:h-40 ml-3 mr-20 md:flex md:block md:items-center md:justify-center shadow-3xl transform hover:scale-105 hover:cursor-pointer" onClick={() => setImage(devliver)}>
        DELIVER
      </div>
      <span className='ml-10 hidden lg:block'>
        <img src="/forward.png" alt="" className="w-1/3 h-auto" />
      </span>
    </div >
  );
};

export default HeroSection;