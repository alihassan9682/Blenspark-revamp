import React from "react";
import { FiSettings } from "react-icons/fi";

const ConfigSidebar = ({ options, onOptionSelect, handleExport, setBarActive, barActive }) => {
    return (
        <div className="flex flex-col justify-between bg-white h-full w-full p-6 shadow-xl rounded-2xl border border-gray-100 max-w-sm mx-auto md:mx-0">

            {/* Tabs */}
            <div className="flex justify-center mb-6 w-full">
                <button
                    className="px-5 py-2 text-sm md:text-base w-full rounded-xl font-medium bg-[#359dad] text-white shadow-md hover:bg-[#2c8c9a] transition-all duration-300"
                    onClick={handleExport}
                >
                    View in Space
                </button>
            </div>

            {/* Horizontal Scrollable Image Options */}
            <div className="overflow-x-auto flex items-center gap-4 py-3 scrollbar-thin scrollbar-thumb-gray-300">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="cursor-pointer flex-shrink-0"
                        onClick={() => onOptionSelect(option)}
                    >
                        <img
                            src={option.image}
                            alt={option.label}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300 border-2 border-transparent hover:border-black"
                        />
                    </div>
                ))}
            </div>

            {/* Settings Icon */}
            <div className="flex justify-center mt-auto">
                <button
                    className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Settings"
                    onClick={() => {
                        setBarActive(!barActive);
                        // console.log("Settings clicked");
                    }}
                >
                    <FiSettings className="w-6 h-6 text-gray-600 hover:text-black" />
                </button>
            </div>
        </div>
    );
};

export default ConfigSidebar;
