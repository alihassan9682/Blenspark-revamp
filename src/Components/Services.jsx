/** @format */

import React from "react";
import logo from "../assets/LogoImages/logo.png";

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-cyan-600">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="service-card bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/3 flex flex-col lg:flex-row transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={logo}
            alt="3D Animations"
            className="rounded-lg w-full lg:w-1/2 h-48 object-cover lg:mr-4"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 mt-4 lg:mt-0 text-gray-700 text-center lg:text-left">
              3D Animations
            </h2>
            <p className="text-gray-600 text-center lg:text-left">
              This service offers amazing features that benefit you greatly.
            </p>
          </div>
        </div>
        <div className="service-card bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/3 flex flex-col lg:flex-row transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={logo}
            alt="Information and Technology"
            className="rounded-lg w-full lg:w-1/2 h-48 object-cover lg:mr-4"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 mt-4 lg:mt-0 text-gray-700 text-center lg:text-left">
              Information and Technology
            </h2>
            <p className="text-gray-600 text-center lg:text-left">
              This service provides exceptional value and unparalleled quality.
            </p>
          </div>
        </div>
        <div className="service-card bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/3 flex flex-col lg:flex-row transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={logo}
            alt="3D World"
            className="rounded-lg w-full lg:w-1/2 h-48 object-cover lg:mr-4"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 mt-4 lg:mt-0 text-gray-700 text-center lg:text-left">
              3D World
            </h2>
            <p className="text-gray-600 text-center lg:text-left">
              Experience the best in class with our outstanding service.
            </p>
          </div>
        </div>
        <div className="service-card bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/3 flex flex-col lg:flex-row transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={logo}
            alt="When Tech meets 3D World"
            className="rounded-lg w-full lg:w-1/2 h-48 object-cover lg:mr-4"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 mt-4 lg:mt-0 text-gray-700 text-center lg:text-left">
              When Tech meets 3D World
            </h2>
            <p className="text-gray-600 text-center lg:text-left">
              Experience the best in class with our outstanding service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
