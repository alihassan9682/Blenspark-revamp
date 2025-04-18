import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { SofaOptions, Caroptions } from "./config";


export const ConfiguratorBar = ({ selectedOption, handleStandChange, handleColorChange, handleZoom, barActive, handleRimChange }) => {
    const [activeOption, setActiveOption] = useState(null);
    const [selectedBar, setSelectedBar] = useState(null);

    const handleOptionSelect = (option) => {
        setActiveOption(activeOption === option.label ? null : option.label); // Toggle submenu
    };

    const subOptionHandlers = {
        Wooden: () => {
            // .log("Wooden Stands selected");
            handleStandChange("Wood")
        },
        Metal: () => {
            // .log("Metal Stands selected");
            handleStandChange("Metal")
        },
        Sliver: () => {
            handleStandChange("Sliver")
        },
        Rim1: () => {
            handleRimChange(true)
        },
        Rim2: () => {
            handleRimChange(false)
        },
        Alpine: (label, bg) => {
            handleColorChange(label, "#FFFFFF", bg);
            // // // .log("Black color selected for", label, bg);
            // white car, dark bg
        },
        Brown: (label, bg) => {
            handleColorChange(label, "#E0B778", bg);
            // // // .log("Brown color selected for", label, bg);
            // brown car, light bg
        },

        Blue: (label, bg) => {
            handleColorChange(label, "#7C9AAE", bg);
            // // // .log("Black color selected for", label, bg);
            // cool blue car, dark navy bg
        },

        Black: (label, bg) => {
            // // // .log("Black color selected for", label, bg);
            handleColorChange(label, "#4A4F42", bg); // black car, light bg
        },

        Gray: (label, bg) => {
            // // // .log("Gray color selected for", label);
            handleColorChange(label, "gray", bg); // neutral contrast
        },

        Green: (label, bg) => {
            // // // .log("Green color selected for", label, bg);
            handleColorChange(label, "green", bg); // green car, clean bg
        },

        Red: (label, bg) => {
            // // // .log("Red color selected for", label);
            handleColorChange(label, "red", bg);
            // // // .log(bg)// soft red contrast bg
        },

        ManhattanGreen: (label, bg) => {
            // // // .log("ManhattanGreen selected for", label);
            handleColorChange(label, "#4A4F42", bg); // same as Black
        },

        MineralWhiteMetallic: (label, bg) => {
            // // // // .log("MineralWhiteMetallic selected for", label);
            handleColorChange(label, "#E6E6E6", bg); // light car, deep dark bg
        },
    };
    useEffect(() => {
        selectedOption.label === "Sofa" ? setSelectedBar(SofaOptions) : setSelectedBar(Caroptions);
    }, [selectedOption]);
    return (
        barActive && (
            <div className={`transition-all duration-500 ease-in-out transform flex bg-gray-200 flex-row justify-center items-center gap-4  w-auto  rounded-lg p-4  ${barActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}>
                {selectedBar?.map((option, index) => (
                    <React.Fragment key={index}>
                        <div className="relative flex flex-col items-center">
                            {/* Downward Arrow */}
                            <div className={`absolute bottom-full mb-2 text-[#359dad] transition-all duration-400 ease-in-out ${activeOption === option.label ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                                }`}>
                                <FaAngleDown size={12} />
                            </div>
                            <button
                                onClick={() => {
                                    handleOptionSelect(option);
                                }}
                                className="text-[#359dad] w-auto transform hover:scale-110 font-semibold mx-4 flex items-center justify-center"
                                title={option.label}
                            >
                                {option.icon}
                            </button>

                            {/* Submenu - Strictly horizontal layout */}
                            <div className={`absolute bottom-full mb-6 px-4 py-3 bg-white   text-gray-800 backdrop-blur-sm transition-all duration-400 ease-in-out z-50 rounded-lg shadow-lg ${activeOption === option.label
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                                }`}>
                                <div className="flex flex-nowrap items-center overflow-x-auto gap-3 py-1 scrollbar-hide"> {/* Horizontal scrolling if needed */}
                                    {option.subOptions?.map((subOption, subIndex) => (
                                        <button
                                            key={subIndex}
                                            onClick={() => {
                                                const subHandler = subOptionHandlers[subOption.label];
                                                // .log("SubOption clicked:", subOption.label);
                                                if (subHandler) {
                                                    subHandler(option.label, subOption.bg);
                                                    subHandler()
                                                }
                                            }}
                                            className="flex flex-col items-center p-1 min-w-[60px] flex-shrink-0" // Prevent shrinking
                                            title={subOption.label}
                                        >
                                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md flex items-center justify-center bg-gray-50">
                                                {subOption.iconUrl ? (
                                                    <img
                                                        src={subOption.iconUrl}
                                                        alt={subOption.label}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="text-xl">{subOption.icon}</div>
                                                )}
                                            </div>
                                            <span className="text-xs mt-1.5 text-center max-w-[60px] truncate">
                                                {subOption.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {index < selectedBar?.length - 1 && <div className="w-px bg-gray-200 self-stretch"></div>}
                    </React.Fragment>
                ))}
            </div>
        )
    );
};