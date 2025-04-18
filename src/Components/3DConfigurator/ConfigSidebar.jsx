import { useState } from "react"
import { FiSettings } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

const ConfigSidebar = ({
    Options,
    onOptionSelect,
    handleExport,
    setBarActive,
    barActive,
    selectedOption,
    onCarControlClick,
}) => {

    const renderModelDetails = () => (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-3">
                <img
                    src={selectedOption.currentModel.image}
                    alt={selectedOption.currentModel.label}
                    className="w-auto h-16 object-cover rounded-lg mr-3"
                />
                <h3 className="text-lg font-semibold">{selectedOption.currentModel.label}</h3>
            </div>

            <p className="text-sm text-gray-600 mb-3">
                {selectedOption.currentModel.details.description}
            </p>
            <ul className="space-y-4 mt-2">
                {Object.entries(selectedOption.currentModel.details)
                    .filter(([key]) => key !== 'description')
                    .map(([key, value]) => (
                        <li key={key} className="flex flex-col">
                            {/* Section Header (no bullet) */}
                            <h4 className="text-sm font-bold text-[#359dad] capitalize mb-1">
                                {key.replace(/([A-Z])/g, ' $1')}:
                            </h4>

                            {/* Bullet points for items */}
                            <ul className="list-disc pl-5 space-y-1">
                                {value.split('•').filter(item => item.trim()).map((item, i) => (
                                    <li key={i} className="text-sm text-gray-600">
                                        {item.trim()}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
            </ul>
        </div>
    );

    const renderCarControls = () => (
        <div className="flex justify-between mt-3">
            {selectedOption.currentModel.controls?.map((control) => (
                <button
                    key={control.action}
                    onClick={() => onCarControlClick(control.action)}
                    className="flex flex-col items-center justify-center p-2 w-1/3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                    {/* <span className="text-xl mb-1">{control.icon}</span> */}
                    <span className="text-xs">{control.label}</span>
                </button>
            ))}
        </div>
    );


    return (
        <div className="flex flex-col justify-between bg-white h-full w-full p-6 shadow-xl rounded-2xl border border-gray-100 max-w-sm mx-auto md:mx-0">
            {/* Category Selection */}
            <div className="overflow-x-auto flex items-center gap-4 py-3 scrollbar-thin scrollbar-thumb-gray-300">
                {Options.map((option) => (
                    <div
                        key={option.value}
                        className={`cursor-pointer flex-shrink-0 p-2 rounded-lg ${selectedOption.value === option.value ? 'bg-gray-100' : ''}`}
                        onClick={() => onOptionSelect(option)}
                    >
                        <img
                            src={option.image}
                            alt={option.label}
                            className="w-auto h-14 object-contain hover:scale-105 transition-transform"
                        />
                        <span className="text-xs text-center block mt-1">{option.label}</span>
                    </div>
                ))}
            </div>

            {/* Model Details */}
            {selectedOption && renderModelDetails()}

            {/* Car Controls (only for car) */}
            {selectedOption.value === 'Car' && renderCarControls()}

            {/* Combined Action Buttons */}
            <div className="flex flex-row gap-3 mt-4">
                <button
                    className="flex items-center whitespace-nowrap justify-center px-4 py-3 w-1/2 rounded-xl font-medium bg-[#359dad] text-white shadow-md hover:bg-[#2c8c9a] transition-all duration-300"
                    onClick={handleExport}
                >
                    <FiEye className="w-5 h-5 mr-2" />
                    <span>View in Space</span>
                </button>

                <button
                    className="flex items-center justify-center px-4 py-3 w-1/2 rounded-xl font-medium bg-gray-100 text-gray-700 shadow-md hover:bg-gray-200 transition-all duration-200"
                    onClick={() => setBarActive(!barActive)}
                >
                    <FiSettings className="w-5 h-5 mr-2" />
                    <span>Settings</span>
                </button>
            </div>
        </div>
    );
};

export default ConfigSidebar;