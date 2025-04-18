import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com/blenspark" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/blenspark" },
  ];

  const handleOnClick = () => {
    navigate(`/contact`);
  };

  return (
    <footer className="bg-gradient-to-r from-[#0086a4] to-[#5ce1e6] text-white p-10">
      <div className="container mx-auto px-6 py-10">
        {/* Header */}
        <h1 className="text-3xl lg:text-5xl font-semibold text-center mb-8">
          Let’s Work Together!
        </h1>

        {/* Mobile Accordion */}
        <div className="lg:hidden">
          {/* Address Section */}
          <div className="text-lg">
            <button
              className="w-full flex justify-between items-center py-4 px-2 text-left"
              onClick={() => toggleSection("address")}
            >
              <span className="text-xl">Address</span>
              <span className="text-2xl">{activeSection === "address" ? "-" : "+"}</span>
            </button>
            {activeSection === "address" && (
              <div className="px-4 pb-4 text-sm">
                <p>
                  608, The Workplace, <br />
                  Main Boulevard Gulberg, <br />
                  Block E2 Gulberg III, <br />
                  Lahore, Pakistan <br /> 54000
                </p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="text-lg">
            <button
              className="w-full flex justify-between items-center py-4 px-2 text-left"
              onClick={() => toggleSection("contact")}
            >
              <span className="text-xl">Contact</span>
              <span className="text-2xl">{activeSection === "contact" ? "-" : "+"}</span>
            </button>
            {activeSection === "contact" && (
              <div className="px-4 pb-4 text-sm">
                <p>
                  Mobile: +923406232190 <br />
                  Mobile: +93134856122 <br />
                  <a href="mailto:info@blenspark.com" className="font-semibold">
                    info@blenspark.com
                  </a>
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="p-3 bg-white text-[#0086a4] rounded-full hover:scale-110 transition-transform"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
                <button
                  className="mt-4 py-1.5 px-4 text-sm bg-white text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={handleOnClick}
                >
                  Schedule a Call
                </button>
              </div>
            )}
          </div>

          {/* Office Hours Section */}
          <div className="text-lg">
            <button
              className="w-full flex justify-between items-center py-4 px-2 text-left"
              onClick={() => toggleSection("hours")}
            >
              <span className="text-xl">Office Hours</span>
              <span className="text-2xl">{activeSection === "hours" ? "-" : "+"}</span>
            </button>
            {activeSection === "hours" && (
              <div className="px-4 pb-4 text-sm">
                <p>
                  Monday: 9am - 7pm <br />
                  Tuesday: 9am - 7pm <br />
                  Wednesday: 9am - 7pm <br />
                  Thursday: 9am - 7pm <br />
                  Friday: 9am - 7pm
                </p>
              </div>
            )}
          </div>

        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between gap-20">
          {/* Address Section */}
          <div className="w-1/4">
            <h2 className="font-semibold text-xl mb-4">Address</h2>
            <p>
              608, The Workplace, <br />
              Main Boulevard Gulberg, <br />
              Block E2 Gulberg III, <br />
              Lahore, Pakistan <br /> 54000
            </p>
          </div>

          {/* Contact Section */}
          <div className="w-1/4">
            <h2 className="font-semibold text-lg mb-4">Contact</h2>
            <p>
              Mobile: +923406232190 <br />
              Mobile: +93134856122 <br />
              <a href="mailto:info@blenspark.com" className="font-semibold">
                info@blenspark.com
              </a>
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-3 bg-white text-[#0086a4] rounded-full hover:scale-110 transition-transform"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Office Hours Section */}
          <div className="w-1/4">
            <h2 className="font-semibold text-lg mb-4">Office Hours</h2>
            <p>
              Monday: 9am - 7pm <br />
              Tuesday: 9am - 7pm <br />
              Wednesday: 9am - 7pm <br />
              Thursday: 9am - 7pm <br />
              Friday: 9am - 7pm
            </p>
          </div>

          {/* Button Section */}
          <div className="w-1/4 flex flex-col justify-start">
            <button
              className="mt-4 py-2 px-6 bg-white text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
              onClick={handleOnClick}
            >
              Schedule a Call
            </button>
          </div>
        </div>


        <div className="mt-8 text-center text-gray-300 text-sm">
          © 2024 Blenspark. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
