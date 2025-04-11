import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { SofaOptions, Caroptions } from "./subOptions";



export const ConfiguratorBar = ({ selectedOption, handleStandChange, handleColorChange, handleZoom }) => {
    const [activeOption, setActiveOption] = useState(null);
    const [selectedBar, setSelectedBar] = useState(null);

    const handleOptionSelect = (option) => {
        setActiveOption(activeOption === option.label ? null : option.label); // Toggle submenu
    };

    const subOptionHandlers = {
        WoodenStands: () => handleStandChange(true),
        MetalStands: () => handleStandChange(false),
        "Orche Yellow": (label) => {
            console.log("Orche Yellow color selected for", label);
            handleColorChange("Cushions", "orcheyellow");
        },
        Red: (label) => {
            console.log("Red color selected for", label);
            handleColorChange(label, "red");
        },
        Blue: (label) => {
            console.log("Blue color selected for", label);
            handleColorChange(label, "blue");
        },
        Green: (label) => {
            console.log("Green color selected for", label);
            handleColorChange(label, "green");
        },
        Gray: (label) => {
            console.log("Gray color selected for", label);
            handleColorChange(label, "gray");
        },
        BMW: () => handleZoom("carBody"),
    };

    useEffect(() => {
        selectedOption.label === "Sofa" ? setSelectedBar(SofaOptions) : setSelectedBar(Caroptions);
    }, [selectedOption]);

    return (
        <div className="flex flex-row justify-center items-center gap-4 border w-auto border-gray-200 rounded-lg p-4 bg-gray-100 bg-opacity-50 shadow-lg">
            {selectedBar?.map((option, index) => (
                <React.Fragment key={index}>
                    <div className="relative flex flex-col items-center">
                        {/* Downward Arrow */}
                        <div
                            className={`absolute bottom-full mb-2 text-[#359dad] transition-all duration-400 ease-in-out ${activeOption === option.label ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                                }`}
                        >
                            <FaAngleDown size={12} />
                        </div>
                        <button
                            onClick={() => {
                                handleOptionSelect(option);
                                console.log("Option selected:", option.label);
                            }}
                            className="text-[#359dad] transform hover:scale-110 font-semibold mx-4 flex items-center justify-center"
                            title={option.label}
                        >
                            {option.icon}
                        </button>
                        {/* Submenu */}
                        <div
                            className={`absolute bottom-full mb-8 bg-gray-200 bg-opacity-90 text-gray-800 py-1 px-2 flex justify-center items-center shadow-md z-50 rounded-lg transition-all duration-400 ease-in-out ${activeOption === option.label
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                                }`}
                        >
                            <div className="flex items-center">
                                {option.subOptions?.map((subOption, subIndex) => (
                                    <React.Fragment key={subIndex}>
                                        <button
                                            onClick={() => {
                                                console.log(`Selected sub-option: ${subOption.label} for ${option.label}`);

                                                const subHandler = subOptionHandlers[subOption.label];
                                                if (subHandler) {
                                                    subHandler(option.label); // Call with label if needed
                                                }
                                                handleZoom();
                                            }}

                                            className="text-[#359dad] transform hover:scale-110 font-semibold mx-4 flex items-center justify-center"
                                            title={subOption.label}
                                        >
                                            {subOption.icon}
                                        </button>
                                        {subIndex < option.subOptions.length - 1 && (
                                            <div className="w-px h-6 bg-gray-200 mx-2"></div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                    {index < selectedBar?.length - 1 && <div className="w-px bg-gray-200 self-stretch"></div>}
                </React.Fragment>
            ))}
        </div>
    );
};