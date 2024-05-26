/** @format */

import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownOptionClick = (subItem) => {
    setSelectedItem(subItem);
    navigate(`/${subItem.toLowerCase()}`);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden lg:flex fixed top-0 left-0 h-full w-20 bg-white text-white flex-col justify-evenly space-y-96 border-r">
        <div className="text-3xl font-extrabold rotate-180 hover:cursor-pointer">
          <div className="transform rotate-90 mt-12">
            <p className="text-cyan-600">Blen</p>
          </div>
          <div className="transform rotate-90 mt-9">
            <p className="text-gray-700">Spark</p>
          </div>
        </div>
        <div className="text-white whitespace-nowrap bg-cyan-600 hover:bg-cyan-700 rounded-full p-2 transform rotate-90 hover:scale-105 w-fit -ml-5 px-6 hover:cursor-pointer">
          <div className="transform rotate-180">Lets Talk</div>
        </div>
      </div>
      <div className="flex-1 lg:ml-16 bg-transparent text-white p-4 sm:px-8 md:px-16 lg:px-24 xl:px-28">
        <div className="flex justify-between items-center">
          <nav className="hidden sm:flex w-full justify-between my-2">
            <ul className="flex w-full justify-between text-cyan-600 text-lg sm:text-xl md:text-xl underline-offset-8 uppercase">
              {["Home", "About", "Gallery", "Contact"].map((item) => (
                <li
                  key={item}
                  className="flex items-center relative hover:cursor-pointer"
                >
                  {item === "Gallery" ? (
                    <div className="relative" ref={dropdownRef}>
                      <div
                        onClick={toggleDropdown}
                        className={`flex items-center hover:text-gray-700 ${
                          selectedItem === item ? "text-gray-700 underline" : ""
                        }`}
                      >
                        <span>{item}</span>
                        <FaAngleDown className="ml-1" />
                      </div>
                      {isDropdownOpen && (
                        <ul className="absolute left-0 mt-2 w-48 bg-white text-cyan-600 shadow-lg rounded-md normal-case border-r-4">
                          {["Tech", "3D Art"].map((subItem) => (
                            <li
                              key={subItem}
                              className="hover:text-cyan-400"
                              onClick={() => handleDropdownOptionClick(subItem)}
                            >
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      activeClassName="text-gray-700 underline"
                      className="hover:text-gray-700"
                      onClick={() => setSelectedItem(item)}
                    >
                      {item}
                    </NavLink>
                  )}
                  {item !== "Contact" && <span className="divider"></span>}
                </li>
              ))}
            </ul>
          </nav>
          <div className="sm:hidden">
            <FaBars
              className="text-3xl text-cyan-600 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 h-full w-2/3 bg-gray-700 text-white p-4 sm:hidden z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-4">
            <FaTimes
              className="text-3xl text-cyan-600 cursor-pointer"
              onClick={closeMenu}
            />
          </div>
          <nav>
            <ul className="flex flex-col space-y-4 text-lg uppercase">
              {["Home", "About", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  {item === "Gallery" ? (
                    <div ref={dropdownRef}>
                      <div
                        onClick={toggleDropdown}
                        className={`flex items-center hover:text-cyan-400 ${
                          selectedItem === item ? "text-cyan-400 underline" : ""
                        }`}
                      >
                        <span>{item}</span>
                        <FaAngleDown className="ml-1" />
                      </div>
                      {isDropdownOpen && (
                        <ul className="mt-2 bg-gray-800 p-2 rounded">
                          {["Tech", "3D Art"].map((subItem) => (
                            <li
                              key={subItem}
                              className="hover:text-cyan-400"
                              onClick={() => {
                                handleDropdownOptionClick(subItem);
                                closeMenu();
                              }}
                            >
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      onClick={() => {
                        setSelectedItem(item);
                        closeMenu(); // Close the sidebar after selection
                      }}
                      activeClassName="text-cyan-400 underline"
                      className="hover:text-cyan-400"
                    >
                      {item}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
