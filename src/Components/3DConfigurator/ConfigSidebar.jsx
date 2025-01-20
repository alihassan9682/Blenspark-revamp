import React from "react";



const ConfigSidebar = ({ options, onOptionSelect }) => {
    return (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 h-fit w-fit bg-gray-200 bg-opacity-50 text-[#359dad] text-center p-4 shadow-lg flex flex-col items-center">
            <div className="grid grid-cols-1 gap-4 items-center justify-center"> {/* Centered grid */}
                {options.map((option, index) => (
                    <div
                        key={option.index}
                        className="cursor-pointer flex flex-col items-center justify-center"
                        onClick={()=>onOptionSelect(option)}// Center the image and text
                    >
                        <img
                            src={option.image} // Assuming each option has an image URL
                            alt={option.label}
                            className="w-24 h-24 rounded-full object-cover shadow-md hover:scale-105 transition-transform"
                        />
                        {/* <p className="text-center mt-2">{option.label}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConfigSidebar;