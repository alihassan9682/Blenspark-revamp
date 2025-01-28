import React, { useEffect, useState } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { GiCarDoor } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbWheel } from "react-icons/tb";
import { FaLock, FaUnlock, FaPaintBrush, FaCircle, FaAngleDown } from "react-icons/fa";
import { FaCouch } from "react-icons/fa";
import { GiPillow } from "react-icons/gi";

import { TbSofa } from "react-icons/tb";

const SofaOptions = [
    {
        label: "Cushions",
        icon: <GiPillow size={40} />,
        subOptions: [
            { label: "orche yellow", icon: <FaCircle size={20} color="orche yellow" />, color: 'orche yellow' },
            { label: "Blue", icon: <FaCircle size={20} color="blue" />, color: 'blue' },
            { label: "Green", icon: <FaCircle size={20} color="green" />, color: 'green' },
            { label: "Gray", icon: <FaCircle size={20} color="gray" />, color: 'gray' },
        ],
    },
    {
        label: "Frame",
        icon: <TbSofa size={40} />,
        subOptions: [
            { label: "Red", icon: <FaCircle size={20} color="red" />, color: 'red' },
            { label: "Blue", icon: <FaCircle size={20} color="blue" />, color: 'blue' },
            { label: "Green", icon: <FaCircle size={20} color="green" />, color: 'green' },
            { label: "Gray", icon: <FaCircle size={20} color="gray" />, color: 'gray' },
        ],
    },
    {
        label: "Legs",
        icon: <FaLock size={40} />,
        subOptions: [
            { label: "WoodenStands", icon: <FaUnlock size={20} /> },
            { label: "MetalStands", icon: <FaUnlock size={20} /> },
        ],
    },
];

const Caroptions = [
    {
        label: "Doors",
        icon: <GiCarDoor size={40} />,
        subOptions: [
            { label: "Open Door", icon: <FaUnlock size={20} /> },
            { label: "Close Door", icon: <FaLock size={20} /> },
            { label: "Lock Door", icon: <FaLock size={20} /> },
        ],
    },
    {
        label: "Colors",
        icon: <IoColorPaletteOutline size={40} />,
        subOptions: [
            { label: "Red", icon: <FaCircle size={20} color="red" /> },
            { label: "Blue", icon: <FaCircle size={20} color="blue" /> },
            { label: "Green", icon: <FaCircle size={20} color="green" /> },
        ],
    },
    {
        label: "Wheels",
        icon: <TbWheel size={40} />,
        subOptions: [
            { label: "Alloy", icon: <FaPaintBrush size={20} /> },
            { label: "Steel", icon: <FaPaintBrush size={20} /> },
            { label: "Carbon Fiber", icon: <FaPaintBrush size={20} /> },
        ],
    },
    {
        label: "Sports",
        icon: <IoCarSportOutline size={40} />,
        subOptions: [
            { label: "Turbo Mode", icon: <IoCarSportOutline size={20} /> },
            { label: "Eco Mode", icon: <IoCarSportOutline size={20} /> },
            { label: "Sport Mode", icon: <IoCarSportOutline size={20} /> },
        ],
    },
];
export const ConfiguratorBar = ({ selectedOption, moveToMesh, handleStandChange, handleColorChange }) => {
    const [activeOption, setActiveOption] = useState(null);
    const [selectedBar, setSelectedBar] = useState(null);

    const handleOptionSelect = (option) => {
        setActiveOption(activeOption === option.label ? null : option.label); // Toggle submenu
    };

    // Object-based function mapping for main options
    const mainOptionHandlers = {
        "Doors": () => {
            console.log("Door selected");
            moveToMesh();
        },
        "Frame": () => {
            console.log("Color selected");
            const position = { x: 0, y: 0.001, z: 0 };
            // moveToMesh(position);
        }
        // Add more options here if needed
    };

    const subOptionHandlers = {
        "WoodenStands": () => handleStandChange(true),
        "MetalStands": () => handleStandChange(false),
        "Red": (label) => handleColorChange(label, "red"),
        "Blue": (label) => handleColorChange(label, "blue"),
        "Green": (label) => handleColorChange(label, "green"),
        "Gray": (label) => handleColorChange(label, "gray")
        // Add more sub-options here if needed
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

                                // Use the mainOptionHandlers object for handling main options
                                const handler = mainOptionHandlers[option.label];
                                if (handler) handler();
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
                                                console.log(`Selected sub-option: ${subOption.label}`);

                                                // Use the subOptionHandlers object for handling sub-options
                                                const subHandler = subOptionHandlers[subOption.label];
                                                if (subHandler) subHandler(option.label);
                                            }}
                                            className="text-[#359dad] transform hover:scale-110 font-semibold mx-4 flex items-center justify-center"
                                            title={subOption.label}
                                        >
                                            {subOption.icon}
                                        </button>
                                        {/* Divider line between sub-options */}
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

