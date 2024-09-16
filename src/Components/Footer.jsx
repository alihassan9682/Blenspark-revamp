/** @format */

import React from "react";
import logo from "../assets/LogoImages/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const pages = ['Home', 'About', 'Reviews', 'Contact']
  const socialLinks = [
    { icon: <FaFacebookF className="text-xl hover:scale-110" />, href: 'https://facebook.com' },
    { icon: <FaInstagram className="text-xl hover:scale-110" />, href: 'https://instagram.com' },
    { icon: <FaLinkedinIn className="text-xl hover:scale-110" />, href: 'https://linkedin.com' },
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
    <footer className="bg-gradient-to-r from-[#0086a4] to-[#5ce1e6] xl:h-screen w-full text-white">
      <h1 className="text-white text-6xl font-semibold py-10 px-10">Let's work together.</h1>
      <div
        className="flex flex-row px-10 gap-10 py-10">
        <div>
          <h2 className="font-semibold text-4xl">Address</h2>
          <p className="text-xl py-2">608, The Workplce,<br />
            Main Boulevard Gulburg,<br />
            Block E2 Gulburg III <br /> Lahore, Pakistan <br /> 54000 </p>
        </div>
        <div className="px-20">
          <h2 className="font-semibold text-4xl">Contact</h2>
          <p className="text-xl py-2">Mobile: +923406232190 <br /> Mobile:+93134856122 <br /> <a href="info@blenspark.com" className="font-semibold">info@blenspark.com</a></p>
          <div className="flex flex-row bg-gray-800 justify-evenly w-1/2 rounded-md py-2 my-10">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="cursor-pointer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-4xl">Office Hours</h2>
          <p className="text-xl py-2">Monday : 9am - 7pm <br />.<br />.<br />.<br />Friday: 9am - 7pm</p>
        </div>
      </div>
      <div className="flex flex-row px-10 gap-10 py-10 ">
        <div>
          <h2 className="font-semibold text-4xl">Company</h2>
          <ul className="text-xl py-2">
            {pages.map((page, index) => (
              <li key={index} className="hover:underline hover:scale-105 cursor-pointer">
                {page}
              </li>
            ))}
          </ul>

        </div>
        <div className="px-36">
          <h2 className="font-semibold text-4xl">Services</h2>
          <div>
            <ul className="text-xl uppercase py-2">
              {services.slice(0, 3).map((service, index) => (
                <li key={index} className="hover:scale-105 cursor-pointer">{service}</li>
              ))}
            </ul>
            <ul className="text-xl uppercase py-3">
              {services.slice(3).map((service, index) => (
                <li key={index} className="hover:scale-105 cursor-pointer">{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <button className="2xl:py-4 2xl:px-6 px-4 py-3 2xl:text-xl xl:text-md bg-white text-gray-500 rounded-full whitespace-nowrap">
            Schedule a Call
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
