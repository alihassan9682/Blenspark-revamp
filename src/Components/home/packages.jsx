import React, {useState} from 'react';
import phoneImage from '../../assets/Cards/mobile.png';
import phoneImage1 from '../../assets/Cards/mobile1.png';
import design from '../../assets/Cards/DESIGN/2.png'
import develop from '../../assets/Cards/DESIGN/3.png'
import devliver from '../../assets/Cards/DESIGN/4.png'

const HeroSection = () => {
  const [img, setImage] = useState(phoneImage1)
  return (
    <div className="flex justify-center items-center bg-white py-48">
      <div className="flex items-center justify-center w-full px-4 sm:px-16 md:px-32 lg:px-48 relative">
        <div className="bg-[#359dad] text-white text-2xl font-bold w-44 h-44 flex items-center justify-center shadow-lg transform hover:scale-105 hover:cursor-pointer" onClick={() => setImage(design)}>
          DESIGN
        </div>
        <div className="bg-[#4a4a4a] text-white text-2xl font-bold w-44 h-44 flex items-center justify-center shadow-lg transform hover:scale-105 mx-4 px-4 hover:cursor-pointer" onClick={() => setImage(develop)}>
          DEVELOP
        </div>
        <div className="relative transform hover:scale-105" onClick={() => setImage(phoneImage1)}>
          <img
            src={img}
            alt="Phone1"
            className="w-60 h-auto p-5"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={phoneImage}
              alt="Phone"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="bg-[#34dd64] text-white text-2xl font-bold w-44 h-44 flex items-center justify-center shadow-lg transform hover:scale-105 mx-4 hover:cursor-pointer" onClick={() => setImage(devliver)}>
          DELIVER
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
