/** @format */

import React from "react";
import logo from "../assets/LogoImages/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const pages = ['Home', 'About', 'Reviews', 'Contact'];
  const socialLinks = [
    { icon: <FaFacebookF className="text-lg 2xl:text-xl hover:scale-110" />, href: 'https://facebook.com' },
    { icon: <FaInstagram className="text-lg 2xl:text-xl hover:scale-110" />, href: 'https://instagram.com' },
    { icon: <FaLinkedinIn className="text-lg 2xl:text-xl hover:scale-110" />, href: 'https://linkedin.com' },
  ];
  const services = [
    'Web Development',
    'Data Management',
    'Enterprise Solutions',
    'Furniture & interior rendering',
    'E-Commerce Rendering',
    '3D Animation & Explainer Videos',
    '3D World',
  ];

  return (
    <footer className="min-h-screen bg-gradient-to-r from-[#0086a4] to-[#5ce1e6] w-full text-white">
      <h1 className="text-white text-5xl 2xl:text-6xl font-semibold p-5 2xl:py-10 text-center lg:text-start">Let's work together.</h1>

      {/* Main footer content */}
      <div className="flex flex-col lg:flex-row px-5 xl:pt-10 xl:gap-14 2xl:px-10 gap-5 2xl:gap-10 py-5 2xl:py-10 items-center text-center xl:text-left xl:items-start">
        
        {/* Address */}
        <div>
          <h2 className="font-semibold text-2xl lg:text-start lg:text-3xl 2xl:text-4xl">Address</h2>
          <p className="text-lg 2xl:text-xl py-2 lg:text-start">
            608, The Workplace,<br />
            Main Boulevard Gulberg,<br />
            Block E2 Gulberg III,<br />
            Lahore, Pakistan <br /> 54000
          </p>
        </div>

        {/* Contact */}
        <div className="px-10 2xl:px-20">
          <h2 className="font-semibold text-2xl lg:text-start lg:pt-20 xl:pt-0 lg:text-3xl 2xl:text-4xl">Contact</h2>
          <p className="text-lg 2xl:text-xl py-2 lg:text-start">
            Mobile: +923406232190 <br />
            Mobile: +93134856122 <br />
            <a href="mailto:info@blenspark.com" className="font-semibold">info@blenspark.com</a>
          </p>
          <div className="flex justify-center lg:justify-start lg:py-4 bg-gray-800 w-full md:w-1/2 rounded-md py-2 my-10">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="cursor-pointer mx-2 text-center">
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Office Hours */}
        <div>
          <h2 className="font-semibold text-2xl lg:text-3xl 2xl:text-4xl">Office Hours</h2>
          <p className="text-lg 2xl:text-xl py-2">
            Monday: 9am - 7pm <br />
            .<br />
            .<br />
            .<br />
            Friday: 9am - 7pm
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col lg:flex-row px-7 lg:text-3xl 2xl:px-10 gap-5 lg:gap-3 2xl:gap-10 py-5 2xl:py-10 bg-gradient-to-r from-[#0086a4] to-[#5ce1e6] items-center xl:items-start text-center xl:text-left">
        {/* Company Pages */}
        <div>
          <h2 className="font-semibold text-2xl lg:text-3xl 2xl:text-4xl ">Company</h2>
          <ul className="text-lg 2xl:text-xl py-2">
            {pages.map((page, index) => (
              <li key={index} className="lg:text-start text-medium hover:underline hover:scale-105 cursor-pointer">
                {page}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="px-10 xl:px-36 lg:px-24 ">
          <h2 className="font-semibold text-2xl lg:pt-20 xl:pt-0 lg:text-3xl 2xl:text-4xl lg:text-start">Services</h2>
          <div>
            <ul className="text-lg 2xl:text-xl uppercase py-2">
              {services.slice(0, 3).map((service, index) => (
                <li key={index} className="hover:scale-105 cursor-pointer lg:text-start">{service}</li>
              ))}
            </ul>
            <ul className="text-lg 2xl:text-xl uppercase py-3">
              {services.slice(3).map((service, index) => (
                <li key={index} className="hover:scale-105 cursor-pointer lg:text-start">{service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Schedule a Call Button */}
        <div>
          <button className="py-3 px-4 lg:text-lg 2xl:py-4 2xl:px-6 text-md 2xl:text-xl bg-white text-gray-500 rounded-full whitespace-nowrap">
            Schedule a Call 
          </button>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
