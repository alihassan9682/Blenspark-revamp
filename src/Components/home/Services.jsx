import React from "react";
// import { TfiWorld } from "react-icons/tfi";
// import { AiOutlinePython } from "react-icons/ai";
// import { TbHexagon3D } from "react-icons/tb";
// import { LuCodesandbox } from "react-icons/lu";
// import { BsBuilding } from "react-icons/bs";
// import { PiCubeFocus } from "react-icons/pi";
// import { RiPencilRulerLine } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
// import { GiShoppingCart } from "react-icons/gi";
import { ServicesData } from "../../Data/ServicesCard";
const Services = () => {
    const handleOnClick = () => {
        const link = document.createElement('a');
        link.href = '/BlenSparkProductPortfolio.pdf';
        link.target = '_blank';
        link.click();
    };



    return (
        <div className="container w-full mx-auto 2xl:mx-auto 2xl:my-auto py-12  cursor-pointer flex justify-center flex-col items-center ">
            <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl mt-6 font-bold text-center mb-8 text-[#359dad] px-8 md:px-8 lg:px-20">
                Experience innovation with BlenSpark
            </h1>
            <div className="flex flex-wrap w-full justify-center items-center gap-6 mx-auto mt-2">
                {ServicesData.map((service, index) => (
                    <div key={index} className="service-card bg-white px-6 flex w-full md:w-1/3 transform transition duration-500 hover:scale-105 relative" onClick={handleOnClick}>
                        <div className="w-1/4 flex justify-end items-start mr-3">
                            {/* Render the icon dynamically */}
                            <service.icon className="h-10 w-10 text-[#359dad]" />
                        </div>
                        <div className="w-3/4 flex flex-col relative uppercase cursor-pointer">
                            <h2 className="text-xl font-bold text-[#4a4a4a] mb-4">{service.title}</h2>
                            <p className="text-[#359dad] text-sm mb-10">
                                {service.description}
                            </p>
                            <div className="absolute bottom-0 right-0 mb-4 mr-4 cursor-pointer hover:scale-110">
                                <LuDownload className="h-5 w-5 text-[#359dad] hover:underline" />
                            </div>
                            <div className="flex-grow"></div>
                            <div className="border-t border-gray-300 w-full mt-4"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
                .line {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 2px;
                    width: 0;
                    background-color: #359dad;
                    transition: width 0.3s ease;
                }
                .service-card:hover .line {
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

export default Services;
