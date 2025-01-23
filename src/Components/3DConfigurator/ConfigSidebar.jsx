import React from "react";



const ConfigSidebar = ({ options, onOptionSelect }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full rounded-xl  bg-gray-100 mb-32">
            <div className="grid grid-cols-1 gap-4 items-center justify-center"> {/* Centered grid */}
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="cursor-pointer flex flex-col items-center justify-center"
                        onClick={() => onOptionSelect(option)}// Center the image and text
                    >
                        <img
                            src={option.image} // Assuming each option has an image URL
                            alt={option.label}
                            className="w-20 h-20 rounded-full object-cover shadow-md hover:scale-105 transition-transform"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConfigSidebar;